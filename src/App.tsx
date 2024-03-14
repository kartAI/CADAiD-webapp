import Header from './Components/Header'
import InfoBox from './Components/InformationBox';
import { Container, Grid, Paper } from '@mui/material';
import UploadFiles from './UploadFiles';

function App() {

  return (
    <div style={{backgroundColor: "#D1E8E2", height: "100vh", width: "100vw"}}>
    <Container maxWidth={'sm'} component={Paper} >
      <Grid container spacing={2}>
        <Grid item xs={12} mt={2}>
          <Header/>
        </Grid>
        <Grid item xs={12} mb={2}>
          <InfoBox/>
        </Grid>
        <Grid item xs={12}>
          <UploadFiles/>
        </Grid>
  
      </Grid>
    </Container>
    </div>
  );
}

export default App;
