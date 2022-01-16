import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import BillReducer from './reducers/BillReducer'
import StatementReducer from './reducers/StatementReducer'



const store = createStore(
    combineReducers({
        billState: BillReducer, statementState: StatementReducer
    }),
    composeWithDevTools(applyMiddleware(thunk)))
  
  
  export default store