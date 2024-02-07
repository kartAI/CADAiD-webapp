import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import {
    Box,
    Button,
    Typography
} from '@mui/material'

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
        <Box component="section"sx={{ border: '3px dashed green', borderRadius: '16px'}}>
            <Box {...getRootProps()} style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
                <Box pt={4} pb={4}>
                    <Box display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        alignItems='center'
                        gap={2}>
                            <input {...getInputProps()} />

                            <Typography variant='h6' textAlign='center'>
                                Dra og slipp filene dine her eller
                            </Typography>

                            <Button color='success' variant='contained'>
                                Last opp
                            </Button>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DropBox