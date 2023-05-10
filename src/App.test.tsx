import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from './components/Login/Login';

import { Provider } from 'react-redux';
import { useLoginUserMutation } from './redux/slice/userSlice';
import { store } from './store/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';




test('should display error message when login fails', async () => {
  const mockUser = {
    email: 'test@nagarro.com',
    password: 'password',
  };
  const error = 'Incorrect email or password';


  // Mock the useLoginUserMutation hook
  jest.mock('./redux/slice/userSlice', () => ({
    useLoginUserMutation: jest.fn()
  }));

  const history = createMemoryHistory();
  // Render the Login component
  render(<Provider store={store}>
    {/* <Router > */}
    <Login />
    {/* </Router> */}


  </Provider>)

  //Fill in the login form and submit it
  

  const emailInput = screen.getByLabelText('Email')
  
  const passwordInput = screen.getByLabelText('password');
  const submitButton = screen.getByText('Sign In');
  fireEvent.change(emailInput, { target: { value: mockUser.email } });
  fireEvent.change(passwordInput, { target: { value: mockUser.password } });
  fireEvent.click(submitButton);

  //Wait for the error message to appear
  await waitFor(() => {
    expect(screen.getByText(error)).toBeInTheDocument();
  });
});