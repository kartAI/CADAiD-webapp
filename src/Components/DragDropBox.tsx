import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Box from '@mui/system/Box';
import { Button } from "@mui/material";
import { FileUpload, Opacity } from "@mui/icons-material";

async function verifyDrawings(formData: any) {
    try {
        const response = await fetch("http://localhost:8000", {
            method: "POST",
            body: formData,
        });
        const drawingResult = await response.json();
        console.log(drawingResult)
    } catch (error) {
        console.error("Error:", error)
    }
    
}

//const files = document.querySelector('input[type="file"][multiple]');
//const formData = new FormData();



export default function DroppableBox() {
    return (
        <Droppable droppableId="droppable">
            {(provided) => (
            <Box component="section"sx={{ p: 2, border: '3px dashed green', borderRadius: '16px'}} ref={provided.innerRef} {...provided.droppableProps}>
            Dra og slipp filene dine her &nbsp; &nbsp; <Button variant="contained"  endIcon={<FileUpload/>} color="success" sx={{ fontSize: 12}}>Last opp</Button>
            {provided.placeholder} 
            </Box>
        )}
        </Droppable>
        
    );
}