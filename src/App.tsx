//import logo from './logo.svg';
import React from 'react';
import './App.css';
import DroppableBox from './Components/DragDropBox';
import Header from './Components/Header';
import UploadedFileList from './Components/UploadedList';
import InfoBox from './Components/InformationBox';
import { DragDropContext } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';



function App() {

  const handleDragEnd = () => {
    // TODO
  };

  return (
    <Grid container spacing={1} m={4}>
      <Grid item xs={12} p={4}>
        <Header></Header>
      </Grid>
      <Grid item xs={4} p={4}>
        <InfoBox/>
      </Grid>
      <Grid item xs={12} p={2}>
        <Grid item xs={3.5}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <DroppableBox/>
        </DragDropContext>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <UploadedFileList/>
      </Grid>
    </Grid>
    
    
  );
}

export default App;
