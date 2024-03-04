import { useState } from "react";
import DropBox from "./Components/DropBox"
import ListOfFiles from "./ListOfFiles"
import { UploadedFile } from "./types";

const UploadFiles = () => {

    const [uploadedFiles, setUploadedFiles] = useState<Array<UploadedFile>>([])
    const [loading, setLoading] = useState({})

    const handleUpload = async(acceptedFiles: File[]) => {
        
        const formData = new FormData();
        acceptedFiles.forEach((file: File) => {
            formData.append(`uploaded_files`, file, file.name)
            setLoading(l => {return {...l, [file.name]: true}})
        })

        setUploadedFiles(prevUploadedFiles => [
            ...prevUploadedFiles,
            ...acceptedFiles.map(file => {return {'file_name': file.name} as any})
          ])
        
        const responseApi = await fetch("http://localhost:8000/detect/", {
            method: "POST",
            body: formData,
        });
        const drawingResult = await responseApi.json()
        console.log(drawingResult)
        setUploadedFiles([...uploadedFiles, ...drawingResult])
        drawingResult.map((res: UploadedFile) =>  setLoading(l => {return {...l, [res.file_name]: false}}))
    }


    const handelDeleteUploaded = (fileName: string) => {
        setUploadedFiles(f => f.filter(ff => ff.file_name !== fileName))
    }

    return (
        <>
            <DropBox
                onDrop={handleUpload}
            />
            <ListOfFiles
                files={uploadedFiles}
                onDelete={handelDeleteUploaded}
                loading={loading}
            />

        </>
    )
}

export default UploadFiles