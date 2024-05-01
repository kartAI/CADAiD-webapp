import { useEffect, useState } from "react";
import DropBox from "./Components/DropBox"
import { UploadedFile } from "./types";
import Checklist from "./Components/Checklist";
import ListOfDocs from './ListOfDocuments';
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { isEmpty } from 'lodash'
import CloseIcon from '@mui/icons-material/Close';

const UploadFiles = () => {

    const [uploadedFiles, setUploadedFiles] = useState<Array<UploadedFile>>([])
    const [loading, setLoading] = useState({})
    const [drawingTypes, setDrawingTypes] = useState<Array<string>>([])
    const [openDialog, setOpenDialog] = useState(false)

    const handleUpload = async(acceptedFiles: File[]) => {

        if (isEmpty(acceptedFiles)) {
            setOpenDialog(true)
            return
        }

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
            <Typography variant="subtitle1">
              Din søknad krever følgende byggesakstegninger:
            </Typography>
            <br/>
            <Checklist drawingTypes={drawingTypes}/>
            <br/>
            <Typography variant="body1">
              Last opp:
            </Typography>
    
            <Box mt={1}/>

            <DropBox
                onDrop={handleUpload}
            />
            <br/>
        
            <ListOfDocs
                files={uploadedFiles}
                onDelete={handelDeleteUploaded}
                loading={loading}
            />
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                        
                Tilatte filer PDF, JPG, JPEG, og PNG.     

                <IconButton
                    aria-label="close"
                    onClick={() => setOpenDialog(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Dialog>

        </>
    )
}

export default UploadFiles