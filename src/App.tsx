import Header from './Components/Header';
import InfoBox from './Components/InformationBox';
import { Container, Grid, Paper } from '@mui/material';
import UploadFiles from './UploadFiles';

function App() {

  return (
    <Container maxWidth={'md'} component={Paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2}>
          <Header/>
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
