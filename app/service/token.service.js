import Mock from '../models/mock'

class TokenService {
  static async token2user(token) {
    const username = new Buffer(token, 'base64').toString()
    const user = Mock.finduserbyname(username)
    return user ? username : null
  }
  static async user2token(username) {
    const token = new Buffer(username).toString('base64')
    return token
  }
  static async getbdinfo(username, uk) {
    let bdinfo = 3
    const user = Mock.finduserbyname(username)
    if(user.uks.filter(u=>u === uk)>0){
      bdinfo = Mock.finduk(uk)
    }
    return bdinfo
  }
}

export default TokenService;
