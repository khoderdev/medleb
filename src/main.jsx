import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/tailwind.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./dashboard/Layout";
import { DarkModeProvider } from "./DarkModeContext";
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools()


ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById("root")
);

// import "tailwindcss/tailwind.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import { DashboardLayout } from "./dashboard/Layout";
// import { DarkModeProvider } from "../src/DarkModeContext";
// // import { MyProSidebarProvider } from "./dashboard/sidebar/sidebarContext";
// import { QueryClient, QueryClientProvider } from "react-query";
// import './index.css'
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Router>
//       <QueryClientProvider client={queryClient}>
//         <DarkModeProvider>
//           {/* <MyProSidebarProvider> */}
//             <DashboardLayout>
//               <App />
//             </DashboardLayout>
//           {/* </MyProSidebarProvider> */}
//         </DarkModeProvider>
//       </QueryClientProvider>
//     </Router>
//     ,
//   </React.StrictMode>
// );
