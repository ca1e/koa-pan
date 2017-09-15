import superagent from 'superagent'
import cheerio from 'cheerio'
const request = superagent.agent()

import BdUk from '../models/bdinfo'

const PANURL = 'http://pan.baidu.com/api'

class Pan {
  static async info(uk) {
    let result = {errno: 1, msg: 'some error occur'}
    try {
      const data = await BdUk.findByUk(uk).exec()
      if(data.length == 0){
        result = {errno: -1, msg: 'no such user'}
      }else{
        const cookies = data[0].cookie
        const res = await request.get(PANURL + '/user/getinfo')
          .query({
            user_list: JSON.stringify([uk])
          })
          .set('Cookie', cookies)
        result = res.body
      }
    }catch (e) {console.error(e)
    }
    return result
  }
  static async list(uk) {
    let result = {errno: 1, msg: 'some error occur'}
    try {
      const data = await BdUk.findByUk(uk).exec()
      if(data.length == 0){
        result = {errno: -1, msg: 'no such user'}
      }else{
        const cookies = data[0].cookie
        const res = await request.get(PANURL + '/list')
          .query({
            dir: '/'
          })
          .set('Cookie', cookies)
        result = res.body
      }
    }catch (e) {console.error(e)
    }
    return result
  }
}

export default Pan