import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./dashboard/Layout";
import { DarkModeProvider } from "./DarkModeContext";
// import Modal from "react-modal";
import configureLocalForage from "./localforageConfig";
import store from "./app/store";
import { Provider } from "react-redux";
// import { QueryClientProvider, queryClient } from "react-query";
// import { queryClient } from "./app/react-query/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

configureLocalForage();

// Modal.setAppElement("#root");
document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <BrowserRouter>
              <DashboardLayout>
                <Routes>
                  <Route path="/*" element={<App />} />
                </Routes>
              </DashboardLayout>
            </BrowserRouter>
          </DarkModeProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <ToastContainer position="top-right" autoClose={2000} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
  document.body.style.height = "100vh";
  document.getElementById("root").style.height = "100vh";
});
