import PanAPI from '../rest/panapi'

class PanService {
  static async getinfo(bdinfo) {
    let result = {errno: -1, msg: 'some error occur'}
    try {
      let userinfo = await PanAPI.user_getinfo(bdinfo.cookie, bdinfo.uk)
      const quota = await PanAPI.quota(bdinfo.cookie)
      userinfo = userinfo.records[0]
      result = {
        quota: quota,
        userinfo: userinfo
      }
    }catch (e) {console.error(e)
    }
    return result
  }
  static async getlist(bdinfo, path = '/') {
    let result = {errno: -1, msg: 'some error occur'}
    try {
      result = await PanAPI.list(bdinfo.cookie, path)
    }catch (e) {console.error(e)
    }
    return result
  }
}

export default PanService;
