import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import {
    Box,
    Button,
    Typography,
    Link
} from '@mui/material'
import { FileUpload } from '@mui/icons-material'

type Props = {
    onDrop: (
        acceptedFiles: File[],
        fileRejections: FileRejection[],
        event: DropEvent
    ) => void
}

const DropBox = ({ onDrop }: Props) => {

    const accept = {
        'application/pdf': [],
        'image/png': [],
        'image/jpeg': ['.jpg', '.jpeg'],
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        onDrop,
        maxSize: 25 * 1024 * 1024 // 25MB
    })

    return (
        
        <Box component="section"sx={{ border: '2px dashed green'}}>
            <Box {...getRootProps()} style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
                <Box pt={4} pb={4}>
                    <Box display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        alignItems='center'
                        gap={2}>
                            <input {...getInputProps()} />

                            <Typography variant='body1' textAlign='center'>
                               Dra og slipp filene dine her, eller <Link color='#1e7400' variant='inherit'>
                                last opp en fil
                            </Link>
                            </Typography>

                            

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DropBox