import BdUk from '../models/bdinfo'

const g_users = [
  {
    name: 'admin',
    uks: ['xxx']
  }
]

const g_bds = [
  {
    uk:'xxx',
    cookie: ''
  }
]

class UserService {
  static async getuser_local(token, uk) {
    let result = {uk: '', cookie: ''}
    try{
      console.log(`token:[${token}]`)
      const users = g_users.filter(u=>u.name === token)
      if(users.length > 0){
        let user = users[0]
        const uks = user.uks.filter(u=>u === uk)
        if(uks > 0){
          result.uk = uk
          let bd = g_bds.filter(bd=>bd.uk=== uk)[0]
          result.cookie = bd.cookie
        }
      }
    }catch (e) {console.error(e)
    }
    return result
  }
  static async getuser(uk) {
    let result = {errno: -1, msg: 'some error occur'}
    const data = await BdUk.findByUk(uk).exec()
    if(data.length == 0){
      result = {errno: -1, msg: 'no such user'}
    }else{
      result = {uk: uk, cookie: data[0].cookie}
    }
    return result
  }
}

export default UserService;
