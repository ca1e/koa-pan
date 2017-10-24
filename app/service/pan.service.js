import PanAPI from '../rest/panapi'

class PanService {
  static async getinfo(bdinfo) {
    let result = 2
    try {
      let userinfo = await PanAPI.user_getinfo(bdinfo.cookie, bdinfo.uk)
      const quota = await PanAPI.quota(bdinfo.cookie)
      userinfo = userinfo.records[0]
      result = {}
      result.avatar_url = userinfo.avatar_url
      result.errno = quota.errno
      result.free = quota.free
      result.nick_name = userinfo.nick_name
      result.used = quota.used
      result.total = quota.total
      result.username = userinfo.uname
    }catch (e) {console.error(e)
    }
    return result
  }
  static async getlist(bdinfo, path = '/') {
    let result = 2
    try {
      result = await PanAPI.list(bdinfo.cookie, path)
      if(result.errno === 0) {
        result = result.list ? { list: result.list } : result
      }else{
        result = 4
      }
    }catch (e) {console.error(e)
    }
    return result
  }
  static async downloads(bdinfo, files) {
    let result = 5
    try {
      let o_files = JSON.parse(files)
// {"fs_id":1028949083563839,"isdir":0,"path":"/PanDownload_v1.4.3.zip","server_filename":"PanDownload_v1.4.3.zip","md5":"a4683d10d559adb74e24957ff0ffec6e"}
//   {"errno": -4,"message": "处理请求时遇到错误"}
//   {"errno": 10,"message": "无法处理文件夹"}

      const links = await PanAPI.download(bdinfo.cookie, o_files[0].path)
      console.log(links)
      result = {links: {'name': ['link A', 'link B']}}
    }catch (e) {console.error(e)
    }
    return result
  }
}

export default PanService;
