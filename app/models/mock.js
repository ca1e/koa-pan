let g_users = [
  {
    name: 'test',
    passwd: 'test',
    uks: []
  }
]

let g_bds = [
  {
    uk:'xxxx',
    cookie: 'BBQAAA',
  }
]

class Mock {
  static adduser(username, passwd) {
    const user = {
      name: username,
      passwd: passwd,
      uks: []
    }
    g_users.push(user)
    return 0
  }
  static finduserbyname(username) {
    let user = null
    const users = g_users.filter(u=>u.name === username)
    if(users.length>0){
      user = users[0]
    }
    return user
  }
  static useradduk(username, uk) {
    let user = null
    const users = g_users.filter(u=>u.name === username)
    if(users.length>0){
      user = users[0]
      user.uks.push(uk)
    }
    return user
  }
  static addyk(uk, cookie) {
    const ukinfo = {
      uk: uk,
      cookie: cookie,
      uks: []
    }
    g_bds.push(ukinfo)
    return 0
  }
  static finduk(uk) {
    let bdinfo = null
    const bds = g_bds.filter(u=>u.uk === uk)
    if(bds.length>0){
      bdinfo = bds[0]
    }
    return bdinfo
  }
  static async finduk_db(uk) {
    let result = {}
    const data = await BdUk.findByUk(uk).exec()
    if(data.length>0){
      result = {uk: uk, cookie: data[0].cookie}
    }
    return result
  }
}

export default Mock;
