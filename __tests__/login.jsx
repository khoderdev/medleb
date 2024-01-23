import '@testing-library/jest-dom';
import * as React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import { AccessTokenProvider, useAccessToken } from '../context/AccessTokenContext'; 

// Import the Login component
import Login from '../src/components/login';

// Setup the server for mocking API requests
const fakeUserResponse = { token: 'fake_user_token' };
const server = setupServer(
  rest.post('/api/users/v1.0', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
);

// Before and after hooks for server setup
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem('token');
});
afterAll(() => server.close());

// Custom render function to wrap components with AccessTokenProvider
const renderWithAccessTokenProvider = (ui, { providerProps, ...renderOptions } = {}) => {
  const AllTheProviders = ({ children }) => {
    return <AccessTokenProvider {...providerProps}>{children}</AccessTokenProvider>;
  };
  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};