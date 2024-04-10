import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from '@mui/material/styles'
import { GlobalStyle } from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <App/>
    <GlobalStyle/>
    </>
)