import React from "react";
import { IconButton, List, ListItem, ListItemAvatar, ListItemText , Grid, Avatar} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element: React.ReactElement) {
    return[0,1,2].map((value) => 
        React.cloneElement(element, {
            key: value,
        }),
    );
}


export default function UploadedFileList() {
    return(
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <List dense={true}>
                    {generate(
                        <ListItem 
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            }
                            >
                                <ListItemText
                                primary="Filnavn.png"
                                secondary="test"/>
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    );
    // Her kommer liste, Interacive List - Avatar with text
}