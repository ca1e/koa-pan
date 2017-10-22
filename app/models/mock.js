const g_users = [
  {
    name: 'admin',
    passwd: '123456',
    uks: ['xxxx']
  }
]

const g_bds = [
  {
    uk:'xxxx',
    cookie: 'BBQAAAAAAAAAAAAAAAAAAAAAA'
  }
]

class Mock {
  static getuser(username, pwd) {
    let user = {}
    const users = g_users.filter(u=>{return u.name === username && u.passwd === pwd})
    if(users.length>0){
      user = users[0]
      return {name: user.name, uks: user.uks}
    }
    return user
  }
  static getuserbyname(username) {
    let user = {}
    const users = g_users.filter(u=>u.name === username)
    if(users.length>0){
      user = users[0]
      return {name: user.name, uks: user.uks}
    }
    return user
  }
  static getuk(uk) {
    let bdinfo = {}
    const bds = bdinfo = g_bds.filter(u=>u.uk === uk)
    if(bdinfo.length>0){
      bdinfo = bds[0]
    }
    return bdinfo
  }
  static async getuser_db(uk) {
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

export default Mock;
