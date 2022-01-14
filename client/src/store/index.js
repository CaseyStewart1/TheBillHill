import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import BillReducer from './reducers/BillReducer'



const store = createStore(
    combineReducers({
        billState: BillReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)))
  
  
  export default store