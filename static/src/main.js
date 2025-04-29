import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./BlogContext";
import './App.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
