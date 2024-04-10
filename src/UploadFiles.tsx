import { useState } from "react";
import DropBox from "./Components/DropBox"
import { UploadedFile } from "./types";
import Checklist from "./Components/Checklist";
import ListOfDocs from './ListOfDocuments';
import { Typography } from "@mui/material";


const UploadFiles = () => {

    const [uploadedFiles, setUploadedFiles] = useState<Array<UploadedFile>>([])
    const [loading, setLoading] = useState({})
    const [drawingTypes, setDrawingTypes] = useState<Array<string>>([])

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
        drawingResult.map((res: UploadedFile) =>  {
            setLoading(l => {return {...l, [res.file_name]: false}})
            if (Array.isArray(res.drawing_type))  setDrawingTypes(t => [...t, ...res.drawing_type as any])
        })
    }

    const handelDeleteUploaded = (fileName: string) => {
        const files = uploadedFiles.filter(ff => ff.file_name !== fileName)
        setUploadedFiles(files)
      
        setDrawingTypes(t => {
            let test: string[] = []
                files.forEach(file => {
                    if (Array.isArray(file.drawing_type)) {
                        test = [...test, ...file.drawing_type]
                    }
                })
            return [...test]
            })
      
    }

    return (
        <>
            <Typography>
              Din søknad krever følgende byggesakstegninger:
            </Typography>
            <br/>
            <Checklist drawingTypes={drawingTypes}/>
            <br/>
            <Typography>
              Last opp:
            </Typography>
    
            <br/>

            <DropBox
                onDrop={handleUpload}
            />
            <br/>
        
            <ListOfDocs
                files={uploadedFiles}
                onDelete={handelDeleteUploaded}
                loading={loading}
            />

        </>
    )
}

export default UploadFiles