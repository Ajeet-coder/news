import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { login } from '../redux/slice/userSlice'
import NewsSlice from '../redux/slice/NewsSlice'
import { topstory } from '../redux/slice/NewsCheckSlice'
import SelectNewsType from '../redux/slice/SelectNewsType'
import { newsSearch } from '../redux/slice/NewsSearchSlice'
import SearchedValue from '../redux/slice/SerchedValue'


//

export const rootReducer = combineReducers({
  [login.reducerPath]: login.reducer,
    [topstory.reducerPath]:topstory.reducer,
    [newsSearch.reducerPath]:newsSearch.reducer,
    newsType:SelectNewsType,
    searchedvalue:SearchedValue
}) 

export const store = configureStore({

  reducer: rootReducer,
  //  reducer: {
    
  //   // [login.reducerPath]: login.reducer,
  //    [topstory.reducerPath]:topstory.reducer
    
    
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topstory.middleware).concat(login.middleware).concat(newsSearch.middleware),
    
})
setupListeners(store.dispatch)