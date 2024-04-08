import React from "react";
import { Box, IconButton, Typography, Dialog, DialogContent, DialogTitle, Link} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import CloseIcon from '@mui/icons-material/Close';

const headercontent = "Påkrevde tegninger";

const dialogcontent = <Typography>
Veldig mange søknader er mangelfulle fordi tegningene ikke tilfredsstiller kravene i plan- og bygningsloven.

<h4>Last opp alle nødvendige vedlegg</h4>

Du trenger tegninger som viser hvor på eiendommen du vil bygge, og hvordan bygningen din skal se ut.
Du trenger vanligvis plantegninger, snittegninger og fasadetegninger.


<h4>Generelt om tegninger</h4>
Tegningene skal gi et korrekt bilde av bygningen/konstruksjonen. Tegningen skal ha rette streker og skal for eksempel ikke være tegnet for hånd uten linjal.

<h4>Oppgi Målestokk</h4>
Snitt-tegninger skal være i målestokk 1:100, eller for større bygg kan de være i målestokk 1:200. 1:100 betyr at 1 cm på papiret tilsvarer 1 meter i virkeligheten. Oppgi valgt målestokk på tegningen.

<h4>Ta utgangspunkt i siste godkjente tegninger</h4>
Ta alltid utgangspunkt i det siste som ble godkjent hos kommunen. Dette ser du i de eksisterende bygningstegningene (f.eks plan/fasade/snitt) som du kan kjøpe hos kommunen eller på <Link href="https://e-torg.no/forside" target="_blank" rel="noopener" color="#1e7400">e-torg</Link>. 
Ønsker du å tegne eksisterende tegninger selv må du sørge for at alt du tegner er godkjent hos kommunen gjennom tidligere byggesaker.

<h4>Ønsker du hjelp til utforming av tegninger?</h4>
Det kan være utfordrende å lage gode og komplette tegninger. Mange velger derfor å kontakte arkitekter eller byggmestere som kan hjelpe med tegninger.
</Typography>

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
            <Typography variant='h5' >
                {headercontent}
                <IconButton onClick={handleClickOpen} size="small">
                    <HelpIcon/>
                </IconButton>
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        {headercontent}
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