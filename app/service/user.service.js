import UserAPI from '../rest/userapi'

class UserService {
  static async login(username, password) {
    let result = {errno: -1, msg: 'some error occur'}
    try{
      const user = await UserAPI.userinfo(username, password)
      if(user != 1){
        result = user
      }else{
        result = {errno: -3, msg: 'bad user or password'}
      }
    }catch(e){console.error(e)
    }
    return result
  }
  static async userlist(user) {
    let result = {errno: -1, msg: 'some error occur'}
    try{
      if(user!={}){
        const uks = await UserAPI.getUks(user)
        result = uks
      }
    }catch(e){console.error(e)
    }
    return result
  }
}

export default UserService;
