import Mock from '../models/mock'

class TokenService {
  static async token2user(token) {
    const username = new Buffer(token, 'base64').toString()
    const user = Mock.getuserbyname(username)
    return user
  }
  static async user2token(user) {
    const username = user.name
    const token = new Buffer(username).toString('base64')
    return {errno: 0, token: token}
  }
  static async getbdinfo(user, uk) {
    const bdinfo = Mock.getuk(uk)
    return bdinfo
  }
}

export default TokenService;
