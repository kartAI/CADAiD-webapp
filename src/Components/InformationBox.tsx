import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function InfoBox() {
    return(
       <Alert severity="info">OBS: Din søknad krever plantegning, snittegning, fasadetegning og situasjonsplan</Alert>
    );
}