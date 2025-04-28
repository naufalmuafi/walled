import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./index.css";

import App from "./Walled.jsx";
// import App from "./AuthImplementation.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
