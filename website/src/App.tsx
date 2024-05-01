import Header from './Components/Header'
import { Container, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';
import UploadFiles from './UploadFiles';

function App() {

  return (
      <>
        <AppBar color='success' position='static'>
          <Toolbar>
          <Typography variant="h6">
              eByggesøk
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth={'sm'} component={Paper} style={{ marginTop: '40px'}}>
          <Grid container spacing={2}>

            <Grid item xs={12} mt={2}>
              <Header />
            </Grid>

            <Grid item xs={12}>
              <UploadFiles />
            </Grid>

          </Grid>
          <br/>
          <br/>
        </Container>
      </>
  );
}

export default App;
