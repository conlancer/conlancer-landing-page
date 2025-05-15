import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Conlancer_Website } from "./screens/Conlancer_Website";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Conlancer_Website />
  </StrictMode>
);
