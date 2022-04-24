import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme/theme-context";
import { FilterNotesProvider, LoginProvider, NotesProvider } from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoginProvider>
          <NotesProvider>
            <FilterNotesProvider>
              <App />
            </FilterNotesProvider>
          </NotesProvider>
        </LoginProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
