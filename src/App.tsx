//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DroppableBox from './Components/DragDropBox';
import Header from './Components/Header';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';

function App() {

  const handleDragEnd = () => {
    // TODO
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={3.5}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <DroppableBox/>
        </DragDropContext>
        </Grid>
      </Grid>
    </Grid>
    
    
  );
}

export default App;
