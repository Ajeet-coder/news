import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { userLoginReducer } from './reducers/UserReducer'


// const reducers = combineReducers({
//     userLogin: "",
//   })
  
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : undefined
  
  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  } as {}
  
  const middleware = [thunk]
  
  // const store = createStore(
    
  //   initialState,
  //   composeWithDevTools(applyMiddleware(...middleware))
  // )
  
  //export type RootState = ReturnType<typeof store.getState>
  
  // export default store