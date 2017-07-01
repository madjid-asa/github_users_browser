import axios from 'axios';


const URL_API_GITHUB = 'https://api.github.com/';


class GithubApi {

  constructor(urlApi){
    this.instAxios = axios.create({baseURL : urlApi});
  }

  getReposUserGithub (login) {
    let url = `users/${login}/repos`;
    return this.instAxios.get(url);
  }

  getUserGithub(login) {
    let url = `users/${login}`;
    return this.instAxios.get(url);
  }

  getUserDetail(login) {
    return axios.all([this.getUserGithub(login), this.getReposUserGithub(login)])
        .then(axios.spread((user, repos) => {
          return {user:user.data, repos:repos.data};
        })).catch(error => { throw(error); })
  }

  searchUsers(term) {
    let url = `search/users?q=${term}`;
    return this.instAxios.get(url)
      .then(response => { return response.data.items; })
      .catch(error => { throw(error); });
  }

  getAllUsers() {
    // const url = getAPIUrl("users");
    return this.instAxios.get("users")
        .then(response => { return response.data; })
        .catch(error => { throw(error); });
  }
}

const githubApi = new GithubApi(URL_API_GITHUB);

export default githubApi; 