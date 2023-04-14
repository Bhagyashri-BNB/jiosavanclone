import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      navbar: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      navbar?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    
    primary: {
      main: "#5652ab", //navbar background
      light: "#FFFFFF", //White Color
      //  hover: "#FFFF00", 
    },
    secondary: {
      main: "#F0EFFF",
    },
    // navbar: "#F6F6F6"
    //  hover: "#5652ab",
    // headerFont: "#505D68",
    // dataFont: "#151515",
  },
  status: {
    navbar: "#F6F6F6",
    
  },
  typography: {
    fontFamily: "montserrat-regular",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
