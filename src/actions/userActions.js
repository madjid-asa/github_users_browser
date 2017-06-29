import githubApi from '../api/githubApi';
import * as types from '../actions/actionTypes';  

export const loadUsers = () => {  
  return (dispatch) => {
    return githubApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export const viewUserDetail = (id) => {  
  return (dispatch) => {
    return githubApi.getUserDetail(id).then(user => {
      dispatch(loadUserDetailSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadUsersSuccess = (users) => {  
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export const loadUserDetailSuccess = (user) => {  
  return {type: types.LOAD_USER_DETAIL_SUCCESS, user};
}