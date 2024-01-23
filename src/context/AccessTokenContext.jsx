// AccessTokenProvider.js
import React, { createContext, useContext, useState } from 'react';
import { getToken } from './tokenStorage'; // Replace with the actual path

const AccessTokenContext = createContext();

export const AccessTokenProvider = ({ children }) => {
  const [token, setToken] = useState(getToken() || '');

  const contextValue = {
    token,
    setToken,
  };

  return (
    <AccessTokenContext.Provider value={contextValue}>
      {children}
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  const context = useContext(AccessTokenContext);
  if (!context) {
    throw new Error('useAccessToken must be used within an AccessTokenProvider');
  }
  return context;
};
