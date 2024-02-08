import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Box from '@mui/system/Box';
import { Button } from "@mui/material";
import { FileUpload, Opacity } from "@mui/icons-material";

async function handleUpload(event: any) {
    const files: any[] = event.target.files; 

    try {
        const formData = new FormData();
        [...files].forEach((file, i) => {
            formData.append(`uploaded_files`, file, file.name)
        })
        
        const response = await fetch("http://localhost:8000/detect/", {
            method: "POST",
            body: formData,
        });
        const drawingResult = await response.json();
        console.log(drawingResult)
    } catch (error) {
        console.error("Error:", error)
    }
    
}



export default function DroppableBox() {
    return (
        <Droppable droppableId="droppable">
            {(provided) => (
            <Box component="section"sx={{ p: 2, border: '3px dashed green', borderRadius: '16px'}} ref={provided.innerRef} {...provided.droppableProps}>
            Dra og slipp filene dine her &nbsp; &nbsp; <Button variant="contained"  endIcon={<FileUpload/>} color="success" sx={{ fontSize: 12}}>
                Last opp
                <input
                    type="file"
                    id="file-input"
                    accept=".jpg, .jpeg, .png"
                    onChange={handleUpload}
                />
                </Button>
            {provided.placeholder} 
            </Box>
        )}
        </Droppable>
        
    );
}