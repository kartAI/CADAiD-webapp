import React, { useState } from 'react';
import Box from '@mui/system/Box';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'

type Props = {
    drawingTypes: Array<string>
}

export default function Checklist({drawingTypes}: Props) {
    const [secondary, setSecondary] = React.useState(false)

    const drawing_types = [
        "plantegning",
        "fasade",
        "situasjonskart",
        '"snitt'
    ]

    return(
        <Box style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
            <List dense={false}>
                {drawing_types.map((type, i) => (
                    <ListItem disabled={!drawingTypes.includes(type)}>
                        <ListItemIcon>
                            <CheckIcon color='success'/>
                        </ListItemIcon>
                        <ListItemText primary={type}
                            secondary={secondary ? 'Tilbakemelding' : null} 
                        /> 
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}