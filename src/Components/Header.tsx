import React from "react";
import { Box, IconButton, Typography, Dialog, DialogContent, DialogTitle, } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';

const headercontent = "Påkrevde tegninger";

const dialogcontent = "FasadeTegning, Snitt, Plantegning, Situasjonskart"

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box component="section">
            <Typography variant='h4' >
                {headercontent}
                <IconButton onClick={handleClickOpen}>
                    <HelpIcon />
                </IconButton>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        Påkrevde tegninger
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
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
                            {dialogcontent}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </Typography>
        </Box>
    );
}