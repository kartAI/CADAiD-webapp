import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function InfoBox() {
    return(
       <Alert severity="info">OBS: Last opp alle nødvendige vedlegg. Veldig mange søknader er mangelfulle fordi tegningene ikke tilfredsstiller kravene i plan- og bygningsloven.</Alert>
    );
}