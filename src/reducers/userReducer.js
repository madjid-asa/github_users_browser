import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function userReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOAD_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users,
        usersLoad:true
      });
    case types.LOAD_USER_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        currentUser: action.user
      });
    default: 
      return state;
  }
}