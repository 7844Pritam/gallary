import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GalleryProvider } from "./context/GalleryContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>
);