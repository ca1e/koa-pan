import PanAPI from '../rest/panapi'

class PanService {
  static async getinfo(user) {
    let result = {errno: -1, msg: 'some error occur'}
    try {
      let userinfo = await PanAPI.user_getinfo(user.cookie, user.uk)
      const quota = await PanAPI.quota(user.cookie)
      userinfo = userinfo.records[0]
      result = {
        quota: quota,
        userinfo: userinfo
      }
    }catch (e) {console.error(e)
    }
    return result
  }
  static async getlist(user, path = '/') {
    let result = {errno: -1, msg: 'some error occur'}
    try {
      result = await PanAPI.list(user.cookie, path)
    }catch (e) {console.error(e)
    }
    return result
  }
}

export default PanService;
