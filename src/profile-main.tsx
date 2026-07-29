import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfilePage from "./components/ChrisProfile.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfilePage />
  </StrictMode>,
);
