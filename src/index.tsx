import React from "react";
// virtual dome creation

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import theme from "./app/MaterialTheme";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import ContextProvider from "./app/context/ContextProvider";
import { SocketProvider } from "./app/context/SocketContext";

// real dom
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // virtual dom
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <SocketProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </SocketProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
// virtual dom bn real dom solishitiradi
// va
// Virtual domda sodir bolgan ozgarishni real-dom ga transition qiladi
// Static folder bir marta yuklanadigon resource

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
