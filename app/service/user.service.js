import UserAPI from '../rest/userapi'

class UserService {
  static async register(username, password) {
    let result = 99
    try{
      result = await UserAPI.useradd(username, password)
    }catch(e){console.error(e)
    }
    return result
  }
  static async login(username, password) {
    let result = 99
    try{
      result = await UserAPI.userinfo(username, password)
    }catch(e){console.error(e)
    }
    return result
  }
  static async userlist(username) {
    let result = []
    try{
      const uks = await UserAPI.ukinfos(username)
      result = uks
    }catch(e){console.error(e)
    }
    return result
  }
}

export default UserService;
