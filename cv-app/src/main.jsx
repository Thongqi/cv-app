import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { handleInput } from "./components/input.jsx";
import { PersonalInfo } from "./components/personal-info.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <PersonalInfo></PersonalInfo>
  </StrictMode>,
);
