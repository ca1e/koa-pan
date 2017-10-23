const g_users = [
  {
    name: 'admin',
    passwd: '123456',
    uks: ['xxx']
  }
]

const g_bds = [
  {
    uk:'xxx',
    cookie: 'BBQAAAAAAAAAAAAAAAAAAAAAA',
  }
]

class Mock {
  static finduserbyname(username) {
    let user = null
    const users = g_users.filter(u=>u.name === username)
    if(users.length>0){
      user = users[0]
    }
    return user
  }
  static finduk(uk) {
    let bdinfo = null
    const bds = bdinfo = g_bds.filter(u=>u.uk === uk)
    if(bdinfo.length>0){
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
