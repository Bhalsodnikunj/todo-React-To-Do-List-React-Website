import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <App />
      </BlogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
