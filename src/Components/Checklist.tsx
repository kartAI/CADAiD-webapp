import Box from '@mui/system/Box';
import { Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ClearIcon from '@mui/icons-material/Clear';

type Props = {
    drawingTypes: Array<string>
}

const dialogcontent = {
    "Plantegning": 'Plan info',
    "Fasade": 'fasade',
    "Situasjonskart": 'situasjon info',
    'Snitt': 'snitt info'
}

export default function Checklist({drawingTypes}: Props) {
    const [open, setOpen] = useState(false)
    const [type, setType] = useState<string>()

    const drawing_types = [
        "Plantegning",
        "Fasade",
        "Situasjonskart",
        'Snitt'
    ]

    const toggleDialog = () => setOpen(x => !x)

    const handleDialog = (type: string) => {
        setOpen(true)
        setType(type)
    }

    return(
        <>
        <Box style={{ backgroundColor: 'rgba(30, 116, 0, 0.2)'}}>
            <List dense={true}>
                {drawing_types.map((type, i) => (
                    <ListItem disabled={!drawingTypes.includes(type.toLocaleLowerCase())} key={`${i}-${type}`}>
                        <ListItemIcon>
                            {!drawingTypes.includes(type.toLocaleLowerCase()) ? <ClearIcon/> : <CheckIcon color='success'/>}
                            
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1'>{type}</Typography>} style={{ cursor: 'default'}} /> 
                        {/* <ListItemIcon onClick={() => handleDialog(type)}>
                            <HelpOutlineIcon fontSize='small'/>
                        </ListItemIcon> */}
                    </ListItem>
                ))}
            </List>
        </Box>
        <Dialog onClose={toggleDialog} open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {type}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={toggleDialog}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {/* @ts-ignore */}
                    {dialogcontent[type!]}
                </Typography>
            </DialogContent>
        </Dialog>
        </>
    );
}