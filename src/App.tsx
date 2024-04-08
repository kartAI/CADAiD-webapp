import Header from './Components/Header'
import InfoBox from './Components/InformationBox';
import { Container, Grid, Paper, AppBar, Typography, Box, Toolbar } from '@mui/material';
import UploadFiles from './UploadFiles';

/**/

function App() {

  return (
    <div style={{ backgroundColor: "#eff5f1", height: "100vh", width: "100vw" }}>
      
        <AppBar color='success'>
          <Toolbar>
          <Typography variant="h6">
              eByggesøk
            </Typography>
          </Toolbar>
        </AppBar>
      
      <Container maxWidth={'sm'} component={Paper} >
        <Grid container spacing={2}>
          <Grid item xs={12} mt={2}>
            <Header />
          </Grid>
          <Grid item xs={12} mb={2}>
            <InfoBox />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              Last opp:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <UploadFiles />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
