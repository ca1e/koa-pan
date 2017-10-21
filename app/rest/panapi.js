import superagent from 'superagent'
const request = superagent.agent()

const PANURL = 'http://pan.baidu.com/api'
const PCS_BAIDU = 'http://pcs.baidu.com' + '/rest/v2.0/pcs'

const global_params = {
  channel: 'chunlei',
  web: 1,
  app_id: 250528,
  clienttype: 0
}

class PanAPI {
  static _req_(method, url, cookies) {
    if (method == 'GET') {
      return request.get(url)
      .set('Cookie', cookies)
    }else{
      return request.post(url)
    }
  }
  static async user_getinfo(cookies, uk) {
    const res = await request.get(PANURL + '/user/getinfo')
    .query({
      user_list: JSON.stringify([uk])
    })
    .set('Cookie', cookies)
    return res.body
  }
  static async quota(cookies) {
    const res = await request.get(PANURL + '/quota')
    .query({
      checkfree: 1
    })
    .set('Cookie', cookies)
    return res.body
  }
  static async list(cookies, path) {
    const res = await request.get(PANURL + '/list')
    .query({
      dir: path,
      showempty: 1
    })
    .set('Cookie', cookies)
    return res.body
  }
  static async download(cookies, path) {
    const res = await request.get(PCS_BAIDU + '/file')
    .query({
      method: 'locatedownload',
      path: path,
      ver: 4.0
    })
    .set('Cookie', cookies)
    return res.body
  }
}

export default PanAPI;
