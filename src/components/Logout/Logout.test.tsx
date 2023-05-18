// import { fireEvent, render, screen } from "@testing-library/react"
// import Logout from "../Logout/Logout";
// import { MemoryRouter } from "react-router-dom";
// import { renderWithProviders } from "../../Test/testUtils";

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockedUsedNavigate,
// }));
// describe("Test Logout", () => {
//     test("LogOut button render properly", () => {
//         const { getByText, getByAltText, queryByText, getByRole } = renderWithProviders(
//             <MemoryRouter>
//                 <Logout />
//             </MemoryRouter>,

//         )
//         const logoutButton = screen.getByRole("button", {
//             name: "LogOut?"
//         })


//         expect(logoutButton).toBeInTheDocument();
//     })

//     test("should clear local history and nevigate to login page ", () => {
//         Object.defineProperty(window, "localStorage", {
//             value: {
//                 clear: jest.fn(),
//             },
//         })

//         const { getByRole } = renderWithProviders(
//             <MemoryRouter>
//                 <Logout />
//             </MemoryRouter>,

//         )
//         const logoutButton = screen.getByRole("button", {
//             name: "LogOut?"
//         })

//         fireEvent.click(logoutButton);
//         expect(window.localStorage.clear).toHaveBeenCalledTimes(1);
//         expect(mockedUsedNavigate).toHaveBeenCalledWith("/")
//     })
// })

export{}