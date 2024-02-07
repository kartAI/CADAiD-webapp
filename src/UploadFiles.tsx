import { useState } from "react";
import DropBox from "./Components/DropBox"
import ListOfFiles from "./ListOfFiles";
import StatusBox from "./Components/StatusBox";
import { Box } from "@mui/material";

const UploadFiles = () => {

    const [uploadedFiles, setUploadedFiles] = useState<Array<File>>([])
    const [response, setResponse] = useState<Record<string, Record<string, {'message': string, 'status': string}>>>({})

    const handleUpload = async(acceptedFiles: File[]) => {

        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append(`uploaded_files`, file, file.name)
        })

        setUploadedFiles([...uploadedFiles, ...acceptedFiles])
        
        const responseApi = await fetch("http://localhost:8000/detect/", {
            method: "POST",
            body: formData,
        });
        const drawingResult = await responseApi.json();
        console.log(drawingResult)
        setResponse({...response, ...drawingResult})
    }

    const handelDeleteUploaded = (file: File) => {
        setUploadedFiles(f => f.filter(ff => ff.name !== file.name))
        setResponse(r => {
            const filtered = Object.fromEntries(
                Object.entries(r).filter(([key]) => key !== file.name)
            )
            return filtered
        })
    }

    return (
        <>
            <DropBox
                onDrop={handleUpload}
            />
            <ListOfFiles
                files={uploadedFiles}
                onDelete={handelDeleteUploaded}
            />

            {/* Dette må flyttes og skrives om. Ikke intuitivt */}
            {Object.values(response)
                .map(type => Object.values(type)
                    .map(({message, status}, i) => (
                        <Box p={2} key={i}>
                            <StatusBox text={message} status={status as any}/>
                        </Box>
            )))}
        </>
    )
}

export default UploadFiles