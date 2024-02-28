import React from 'react';
import Box from '@mui/system/Box';
import { List, ListItem, ListItemIcon, ListItemText, createTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function generate(element: React.ReactElement) {
    return[0,1,2].map((value) => 
        React.cloneElement(element, {
            key: value,
        }),
    );
}


export default function Checklist() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return(
        <Box style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
            <List dense={dense}>
                {generate(
                <ListItem>
                    <ListItemIcon>
                        <CheckIcon color='success'/>
                    </ListItemIcon>
                    <ListItemText primary="Plantegning"
                        secondary={secondary ? 'Tilbakemelding' : null} 
                    /> 
                </ListItem>
                )}
            </List>
        </Box>
    );
}