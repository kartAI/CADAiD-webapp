import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    files: File[]
    onDelete: (file: File) => void
}

const ListOfFiles = ({files, onDelete}: Props) => {
    return (
        <List>
        {files.map((file) =>  (
            <ListItem
                key={file.name}
                secondaryAction={
                    <IconButton edge="end" onClick={() => onDelete(file)}>
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemText primary={file.name}/>
            </ListItem>
        ))}
    </List>)
}

export default ListOfFiles