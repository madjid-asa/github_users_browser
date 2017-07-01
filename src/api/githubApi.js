import axios from 'axios';
import users from '../data/users.json'

const URL_API_GITHUB = 'https://api.github.com/';

const instAxios = axios.create({
  baseURL: URL_API_GITHUB
});

const getUserGithub = (login) => {
    let url = `users/${login}`;
    return instAxios.get(url);
};

const getReposUserGithub = (login) => {
    let url = `users/${login}/repos`;
    return instAxios.get(url);
};

class GithubApi {  
  static getUserDetail(login) {
    return axios.all([getUserGithub(login), getReposUserGithub(login)])
        .then(axios.spread((user, repos) => {
          return {user:user.data, repos:repos.data};
        })).catch(error => {
          throw(error);
        })
  }
  static getAllUsers() {
    // const url = getAPIUrl("users");
    return instAxios.get("users")
        .then(response => {
          return response.data;
        }).catch(error => {
            throw(error);
        });
  }
}
export default GithubApi; 