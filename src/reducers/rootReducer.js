import {combineReducers} from 'redux';  
import users from './userReducer';

const rootReducer = combineReducers({  
  // short hand property names
  users
})

export default rootReducer; 