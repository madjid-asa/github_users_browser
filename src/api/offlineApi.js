import users from '../data/users.json'
import repositories from '../data/repositories.json'


const OfflineApi = class OfflineApi {

  getUserDetail(login) {
    const getUser = (element) =>{return element.login === login;}
    const getUserRepo = (element) =>{return element.owner.login === login;}
    return new Promise( (resolve, reject) =>{
      resolve({
        // they are only one user in users.items
        user:users.items.filter(getUser)[0],
        repos:repositories.filter(getUserRepo)
      })
    });
  }

  getAllUsers() {
    return new Promise( (resolve, reject) =>{
      resolve(users.items)});
  }
};

const offlineApi = new OfflineApi();
export default offlineApi; 