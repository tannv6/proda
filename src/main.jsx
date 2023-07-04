import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@assets/scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@style/theme";
import GlobalStyle from "@assets/style/GlobalStyle";
import ScrollToTop from "@modules/editor/ScrollTop";
// css

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div id="wrap">
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </div>
  </BrowserRouter>
);
