// import React from 'react';
// import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';

// import { Provider } from 'react-redux';
// import { Router, useNavigate } from 'react-router-dom';
// import { createMemoryHistory } from 'history';
// import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { renderWithProviders } from '../../Test/testUtils';
// import Login from './Login';
// import { server } from '../../jestSetup';
// import configureStore from 'redux-mock-store'
// import * as router from 'react-router'


// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockedUsedNavigate,
// }));

// describe('App', function () {
//     test('should display error message when login fails', async () => {
//         const { getByText, getByAltText, queryByText, getByRole } = renderWithProviders(
//             <MemoryRouter>
//                 <Login />
//             </MemoryRouter>,

//         )

//         const mockUser = {
//             email: 'a@gmail.com',
//             password: 'a122421',
//         };
//         const emailInput = screen.getByPlaceholderText('Enter Email')

//         const passwordInput = screen.getByPlaceholderText('Enter password');
//         const submitButton = screen.getByText('Sign In');
//         fireEvent.change(emailInput, { target: { value: mockUser.email } });
//         fireEvent.change(passwordInput, { target: { value: mockUser.password } });
//         fireEvent.click(submitButton);


//         const error = 'Error: Incorrect email or password';

//         server.use(
//             rest.get('http://localhost:8000/auth/login', (_req, res, ctx) => {
//                 return res(ctx.status(500), ctx.json('an error has occurred'))
//             }),
//         )
//         await waitFor(() => {
//             expect(screen.getByText(error)).toBeInTheDocument();
//         });




//         expect(getByRole("button")).toBeInTheDocument()
//         //expect(queryByText(/Sign in/i)).not.toBeInTheDocument()

//     });
//     test('Form data renders correctly', () => {
//         const { getByPlaceholderText } = renderWithProviders(
//             <MemoryRouter>
//                 <Login />
//             </MemoryRouter>
//         )
//         const header=screen.getByRole('heading',{
//             level: 2
//         })
//         expect(header).toBeInTheDocument();

//         const avatar=screen.getByTestId('LockOutlinedIcon')
//         expect(avatar).toBeInTheDocument();
//         const emailInput = screen.getByPlaceholderText('Enter Email')
//         expect(emailInput).toBeInTheDocument();

//         const passwordInput = screen.getByPlaceholderText('Enter password');
//         expect(passwordInput).toBeInTheDocument();
//         const submitButton = screen.getByText('Sign In');
//         expect(submitButton).toBeInTheDocument();

//         // const registertitle=screen.getByRole("paragraph")
//         // expect(registertitle).toBeInTheDocument()
//         const registerLink=screen.getByRole("link",{
//             name:"Sign Up"
//         })
//         expect(registerLink).toBeInTheDocument();


//     })

//     test('Login button renders correctly', () => {


//         const { getByText, getByAltText, getByTitle, getByRole } = renderWithProviders(
//             <MemoryRouter>
//                 <Login />
//             </MemoryRouter>,

//         )


//         const loginButton = getByRole('button', {
//             name: "Sign In"
//         })
//         expect(loginButton).toBeInTheDocument()





//     })

// })

export{}

