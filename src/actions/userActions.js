import githubApi from '../api/githubApi';
import offlineApi from '../api/offlineApi';
import * as types from '../actions/actionTypes';


let onLine = navigator.onLine;
let api = onLine ? githubApi : offlineApi;

export const loadUsers = () => {  
  return (dispatch) => {
    return api.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export const searchUsers = (login) => {
  return (dispatch) => {
    if(onLine){
      api.searchUsers(login).then(users => {
        dispatch(loadUsersSuccess(users));
      }).catch(error => {
        throw(error);
      });
    }
  }
}


export const viewUserDetail = (id) => {  
  return (dispatch) => {
    return api.getUserDetail(id).then(user => {
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