import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Box from '@mui/system/Box';
import { Button } from "@mui/material";
import { FileUpload, Opacity } from "@mui/icons-material";
import { green } from "@mui/material/colors";

export default function DroppableBox() {
    return (
        <Droppable droppableId="droppable">
            {(provided) => (
            <Box component="section"sx={{ p: 2, border: '3px dashed green', borderRadius: '16px'}} ref={provided.innerRef} {...provided.droppableProps}>
            Dra og slipp filene dine her &nbsp; &nbsp; <Button variant="contained"  endIcon={<FileUpload/>} color="success" sx={{ fontSize: 12}}>Last opp</Button> 
        </Box>
        )}
        </Droppable>
        
    );
}