import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./dashboard/Layout";
import { DarkModeProvider } from "./DarkModeContext";
import Modal from "react-modal";
import configureLocalForage from "./localforageConfig";
import store from "./app/store";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./app/react-query/queryClient";
// import { AccessTokenProvider } from "./context/AccessTokenContext";

configureLocalForage();

Modal.setAppElement("#root");
document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));
  // const queryClient = new QueryClient();

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {/* <AccessTokenProvider> */}
          <DarkModeProvider>
            <BrowserRouter>
              <DashboardLayout>
                <Routes>
                  <Route path="/*" element={<App />} />
                </Routes>
              </DashboardLayout>
            </BrowserRouter>
          </DarkModeProvider>
          {/* </AccessTokenProvider> */}
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
  document.body.style.height = "100vh";
  document.getElementById("root").style.height = "100vh";
});
