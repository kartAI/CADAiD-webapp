import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { GlobalStyle } from './globalStyle';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
    
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
    <GlobalStyle/>
  </>
)