import BdUk from '../models/bdinfo'
import Mock from '../models/mock'

class UserAPI{
  static async userinfo(name, pwd) {
    const user = Mock.getuser(name, pwd)
    if(user != {}){
      return user
    }
    return 1
  }
  static async getUks(user) {
    const uks = user.uks
    return uks
  }
}

export default UserAPI;
