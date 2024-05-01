import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'
import {
    Box,
    Typography,
    Link
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
        'application/pdf': ['.pdf'],
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg'],
    }

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        onDrop,
        maxSize: 25 * 1024 * 1024 // 25MB
    })

    return (
        
        <Box component="section"sx={{ border: '2px dashed green', borderRadius: '20px'}}>
            <Box data-testid="dropzone-root" role="presentation" {...getRootProps()} style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)', borderRadius: '20px', cursor: 'pointer'}} >
                <Box pt={4} pb={4}>
                    <Box display='flex'
                        flexDirection='row'
                        justifyContent='center'
                        alignItems='center'
                        gap={2}>
                            <input data-testid="dropzone-input" {...getInputProps()} />

                            <Typography variant='subtitle1' textAlign='center' style={{ cursor: 'pointer'}}>
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