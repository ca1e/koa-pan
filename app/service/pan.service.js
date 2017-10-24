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
      let links = 10
      if(o_files.filter(f=>f.isdir === 1).length===0){
        links = {}
        for(let file of o_files) {
          const rlt = await PanAPI.download(bdinfo.cookie, file.path)
          const clinks = rlt.urls.map(u=>u.url)
          links[file.server_filename] = clinks
        }
        links = { links: links }
      }
      result = links
    }catch (e) {console.error(e)
    }
    return result
  }
}

export default PanService;
