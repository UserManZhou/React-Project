import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import HeadeReducer from './reducer/Heade'
import UserReducer from './reducer/User'
import loginReducer from './reducer/login'
import IncrementUserReducer from './reducer/Increment_user'
import DepartmentReducer from './reducer/Department'
import PositionReducer from './reducer/Position'

const allReducer = combineReducers({
  loginReducer,
  HeadeReducer,
  UserReducer,
  IncrementUserReducer,
  DepartmentReducer,
  PositionReducer
})

export default createStore(allReducer,applyMiddleware(thunk))