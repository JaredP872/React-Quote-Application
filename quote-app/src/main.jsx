// import React from "react";
import React from "react";

// Import ReactDOM from the react-dom package
import ReactDOM from "react-dom/client";

// Import the App component
import App from "./App";

// Import the CSS file
import "./index.css";

// Render the App component to the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the App component in a React.StrictMode component
  <React.StrictMode>
    {/*Rendering the App component*/}
    <App />
  </React.StrictMode>
);
