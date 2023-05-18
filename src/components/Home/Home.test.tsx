
// import { render, screen, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { MemoryRouter } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// //import { useGetPostsByTypeQuery } from '../../redux/slice/NewsCheckSlice';
// import Home from './Home';
// import { useGetPostsByTypeQuery } from '../../redux/slice/NewsCheckSlice';

// jest.mock('../../redux/slice/NewsCheckSlice');

// describe('Home', () => {
//   const mockStore = configureStore();
//   const store = mockStore({
//     newsType: { newsType: 'science' }
//   });

//   const mockNewYorkNews = {
//     isLoading: false,
//     data: {
//       results: [
//         { title: 'Article 1', updated_date: '2022-01-01', abstract: 'Article 1 abstract' },
//         { title: 'Article 2', updated_date: '2022-01-02', abstract: 'Article 2 abstract' },
//       ]
//     }
//   };
//   (useGetPostsByTypeQuery as jest.Mock).mockReturnValue(mockNewYorkNews);

//   it('renders the component', async () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Home />
//         </MemoryRouter>
//       </Provider>
//     );

//     // Wait for the articles to load
//     await waitFor(() => expect(screen.queryByText('Loading....')).not.toBeInTheDocument());

//     // Check that the articles are rendered
//     expect(screen.getByText('Article 1')).toBeInTheDocument();
//     expect(screen.getByText('Article 2')).toBeInTheDocument();
//   });
// });

export{}