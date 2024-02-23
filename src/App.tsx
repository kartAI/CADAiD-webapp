import DroppableBox from './Components/DragDropBox';
import Header from './Components/Header';
import Checklist from './Components/Checklist';
import UploadedFileList from './Components/UploadedList';
import InfoBox from './Components/InformationBox';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, Grid, Paper } from '@mui/material';
import UploadFiles from './UploadFiles';



function App() {

  return (
    <Container maxWidth={'sm'} component={Paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Checklist/>
        </Grid>
        <Grid item xs={12} mb={4}>
          <InfoBox/>
        </Grid>
        <Grid item xs={12}>
          <UploadFiles/>
        </Grid>
  
      </Grid>
    </Container>
    
    
  );
}

export default App;
