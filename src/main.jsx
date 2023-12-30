import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tailwindcss/tailwind.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./dashboard/Layout";
import { DarkModeProvider } from "./DarkModeContext";
import Modal from "react-modal";
import * as serviceWorkerRegistration from "./sw.jsx";
// import FullscreenHandler from "./FullscreenHandler";
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// if (process.env.NODE_ENV === 'production') disableReactDevTools()

Modal.setAppElement("#root");

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <DarkModeProvider>
        <BrowserRouter>
          <AuthProvider>
            <DashboardLayout>
              <Routes>
                <Route path="/*" element={<App />} />
              </Routes>
            </DashboardLayout>
          </AuthProvider>
        </BrowserRouter>
      </DarkModeProvider>
    </React.StrictMode>
  );
});

serviceWorkerRegistration.register();
document.body.style.height = "100vh";
document.getElementById("root").style.height = "100vh";