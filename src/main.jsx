import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './app/store';
import RootLayout from './dashboard/Layout.tsx';
import { AuthProvider } from './auth/AuthProvider';
import { DarkModeProvider } from './DarkModeContext';
import configureLocalForage from './localforageConfig';

const queryClient = new QueryClient();

configureLocalForage();

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <BrowserRouter>
              <AuthProvider>
                <RootLayout>
                  <Routes>
                    <Route path="/*" element={<App />} />
                  </Routes>
                </RootLayout>
              </AuthProvider>
            </BrowserRouter>
          </DarkModeProvider>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          <ToastContainer position="top-right" autoClose={2000} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
  document.body.style.height = '100vh';
  document.getElementById('root').style.height = '100vh';
});
