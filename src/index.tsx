import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./ui/Sidebar";
import Navbar from "./ui/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./ui/Fallback";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./muiTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient(); 


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <App />

        </QueryClientProvider>
      
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
