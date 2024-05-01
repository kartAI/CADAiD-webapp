import { UploadedFile } from "./types"
import { Tooltip, Box, IconButton, LinearProgress, Link, Alert} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { useState } from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

type Props = {
    files: UploadedFile[]
    onDelete: (file: string) => void
    loading: any
};

export default function ListOfDocs ( {files, onDelete, loading}: Props) {
    const [expanded, setExpanded] = useState<{[id: string]: boolean}>({})

    const toggleExpand = (id: string) => setExpanded((prev) => ({
        ...prev,
        [id]: !prev[id]
      }))

    const req = ['cardinal_direction', 'room_names', 'scale']

    
    
    return(
        <>
        
        {files.map((file, i) => {
            const isNotValid = (file.room_names || file.scale || file.cardinal_direction)
            return ( 
            <Box key={`${i}-${file.file_name}`} mt={1}>

                <Box width='100%' display='flex' flexDirection='row'>
                    
                    <Box display='flex' justifyContent='space-between' width='100%'>
                        <Box gap={1}>
                        {/* <Tooltip title={file.file_name}> */}
                            <Link
                                style={{ cursor: ((isNotValid || typeof file.drawing_type === 'string')? 'pointer' : 'default') }}
                                component="button"
                                variant="subtitle1"
                                onClick={() => toggleExpand(file.file_name)}
                                underline={(isNotValid || typeof file.drawing_type === 'string') ? "hover" : 'none'}
                                color='#000'
                                >
                                    {file.file_name}
                                </Link>
                        
                            {/* </Tooltip> */}
                            {isNotValid &&
                            <Tooltip title="Filen inneholder mangler. Klikk for detaljer">
                                <IconButton onClick={() => toggleExpand(file.file_name)}>
                                    <ErrorOutlineRoundedIcon color="warning"/>
                                </IconButton>
                            </Tooltip>
                            }
                            {typeof file.drawing_type === 'string' &&
                                <Tooltip title="Filen inneholder mangler. Klikk for detaljer">
                                    <IconButton onClick={() => toggleExpand(file.file_name)}>
                                        <WarningAmberIcon color="error"/>
                                    </IconButton>
                                </Tooltip>
                            }
                        </Box>
                        <Tooltip title='Slett fil'>
                            <IconButton edge="end" onClick={() => onDelete(file.file_name)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                {loading[file.file_name] &&
                    <LinearProgress color="inherit" />
                }
                {expanded[file.file_name] && (isNotValid || typeof file.drawing_type === 'string') &&
                    <>
                        {typeof file.drawing_type === 'string' &&
                             <Alert severity="error" icon={<WarningAmberIcon/>}>{file.drawing_type}</Alert>
                        }
                        {req.map(r => (
                            <>
                            {file[r as keyof UploadedFile]?.length &&
                                <Alert severity="warning" icon={<ErrorOutlineRoundedIcon/>}>{file[r as keyof UploadedFile]}</Alert>
                            }
                            </>
                        ))}
                    </>
                }
            </Box>
        )})}

      
        </>
    );     
}