// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import your global styles
import App from "./App"; // Import the main App component

// Rendering the App component into the root div in public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
