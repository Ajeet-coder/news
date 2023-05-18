// import React, { PropsWithChildren } from 'react'
// import { render } from '@testing-library/react'
// import type { RenderOptions } from '@testing-library/react'
// import { configureStore } from '@reduxjs/toolkit'
// import type { PreloadedState } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'

// //import type { AppStore, RootState } from 'src/store'
// // As a basic setup, import your same slice reducers
// //import counterReducer from 'src/store/slices/counter'

// import { topstory } from '../redux/slice/NewsCheckSlice'
// import { login } from '../redux/slice/userSlice'
// import { newsSearch } from '../redux/slice/NewsSearchSlice'
// import SelectNewsType from '../redux/slice/SelectNewsType'
// import SearchedValue from '../redux/slice/SerchedValue'
// import { AppStore , RootState} from '../store/store'

// // This type interface extends the default options for render from RTL, as well
// // as allows the user to specify other things such as initialState, store.
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: PreloadedState<RootState>
//   store?: AppStore
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: {
//         [login.reducerPath]: login.reducer,
//         [topstory.reducerPath]:topstory.reducer,
//         [newsSearch.reducerPath]:newsSearch.reducer,
//         newsType:SelectNewsType,
//         searchedvalue:SearchedValue
//       },
//       preloadedState,
//       middleware: getDefaultMiddleware =>
//         getDefaultMiddleware().concat(topstory.middleware).concat(login.middleware).concat(newsSearch.middleware),
//     }),
//     ...renderOptions
//   }: ExtendedRenderOptions = {},
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
//     return <Provider store={store}>{children}</Provider>
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
// }



// // import React, {ReactElement} from 'react'
// // import {render, RenderOptions} from '@testing-library/react'

// // const AllTheProviders = ({children}: {children: React.ReactNode}) => {
// //   return (
    
// //   )
// // }

// // const customRender = (
// //   ui: ReactElement,
// //   options?: Omit<RenderOptions, 'wrapper'>,
// // ) => render(ui, {wrapper: AllTheProviders,  ...options})

// // export * from '@testing-library/react'
// // export {customRender as render}
export{}