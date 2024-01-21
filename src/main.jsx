import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./dashboard/Layout";
import { DarkModeProvider } from "./DarkModeContext";
import Modal from "react-modal";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "./context/queryClient";
import { QueryClient, QueryClientProvider } from "react-query";

Modal.setAppElement("#root");
document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  const queryClient = new QueryClient();

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
});

// serviceWorkerRegistration.register();
document.body.style.height = "100vh";
document.getElementById("root").style.height = "100vh";
// import * as serviceWorkerRegistration from "../sw.jsx";
// import FullscreenHandler from "./FullscreenHandler";
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

// if (process.env.NODE_ENV === 'production') disableReactDevTools()

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js')
//           .then((registration) => {
//               console.log('Service Worker registered with scope:', registration.scope);
//           })
//           .catch((error) => {
//               console.error('Service Worker registration failed:', error);
//           });
//   });
// }
