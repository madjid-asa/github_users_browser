import githubApi from '../api/githubApi';
import offlineApi from '../api/offlineApi';
import * as types from '../actions/actionTypes';

var outOfLimitsGithubApi = false;

const getApi = () => {
  let onLine = navigator.onLine && ! outOfLimitsGithubApi;
  return onLine ? githubApi : offlineApi;
}

const manageError403  = () => {
  outOfLimitsGithubApi = true;
  setTimeout(()=>{ outOfLimitsGithubApi=false; }, 60000);
}

export const loadUsers = () => {  
  return (dispatch) => {
    return getApi().getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      if (error.response.status === 403){
        manageError403();
      }else {
        console.error(error);
      }
    });
  };
}

export const searchUsers = (login) => {
  return (dispatch) => {
    getApi().searchUsers(login).then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      if (error.response.status === 403){
        manageError403();
      }else {
        console.error(error);
      }
    });
  }
}


export const viewUserDetail = (id) => {  
  return (dispatch) => {
    return getApi().getUserDetail(id).then(user => {
      dispatch(loadUserDetailSuccess(user));
    }).catch(error => {
      if (error.response.status === 403){
        manageError403();
      }else {
        console.error(error);
      }
    });
  };
}

export const loadUsersSuccess = (users) => {  
  return {type: types.LOAD_USERS_SUCCESS, users};
}

export const loadUserDetailSuccess = (user) => {  
  return {type: types.LOAD_USER_DETAIL_SUCCESS, user};
}