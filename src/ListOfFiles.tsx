import { IconButton, Box, Typography, Tooltip, Grid, LinearProgress, Paper } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import WarningIcon from '@mui/icons-material/Warning'
import Chip from '@mui/material-next/Chip';
import { UploadedFile } from "./types"

type Props = {
    files: UploadedFile[]
    onDelete: (file: string) => void
    loading: any
}

const ListOfFiles = ({files, onDelete, loading}: Props) => {
    return (
        <>
        {files.map((file, i) => (
            <Box key={`${i}-${file.file_name}`} mt={2}>
                <Paper>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}} p={2}>

                        <Tooltip title={file.file_name}>
                            <Typography
                                variant='h6'
                                width='50%'
                                noWrap
                            >
                                {file.file_name}
                            </Typography>
                        </Tooltip>

                        <Box display='flex' gap={1}>
                            {file?.drawing_type && Array.isArray(file.drawing_type) && file.drawing_type.map((type) => (
                                <Chip label={type.toUpperCase()}/>
                            ))}
                            <IconButton edge="end" onClick={() => onDelete(file.file_name)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                        
                    </Box>
                    {loading[file.file_name] ?
                        <LinearProgress color="inherit" />
                        : (
                            <Box style={{backgroundColor: '#f5f5f5'}}>
                                <Grid container columnSpacing={{ xs: 2 }} p={2}>
                                    <Grid item>
                                        {file.cardinal_direction && <Chip label={file.cardinal_direction} color="warning"  icon={<WarningIcon fontSize="small" />} /> }
                                    </Grid>
                                    <Grid item> 
                                        {file.room_names && <Chip icon={<WarningIcon fontSize="small" />} label={file.room_names} color="warning"/>}
                                    </Grid>
                                    <Grid item >
                                        {file.scale && <Chip icon={<WarningIcon fontSize="small"/>} label={file.scale} color="warning"/>}
                                    </Grid>
                                </Grid>
                            </Box>
                    )}
                </Paper>
            </Box>
        ))}
        </>
    )
}

export default ListOfFiles