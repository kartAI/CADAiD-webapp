import Box from '@mui/system/Box';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'

type Props = {
    drawingTypes: Array<string>
}

export default function Checklist({drawingTypes}: Props) {

    const drawing_types = [
        "Plantegning",
        "Fasade",
        "Situasjonskart",
        'Snitt'
    ]

    return(
        <Box style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
            <List dense={true}>
                {drawing_types.map((type, i) => (
                    <ListItem disabled={!drawingTypes.includes(type.toLocaleLowerCase())} key={`${i}-${type}`}>
                        <ListItemIcon>
                            <CheckIcon color='success'/>
                        </ListItemIcon>
                        <ListItemText primary={type}/> 
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}