import Mock from '../models/mock'

import crypto from 'crypto'
import { sec_key } from '../config'

const HEADER_BASE64 = 'ewogICJhbGciOiAiSFMyNTYiLAogICJ0eXAiOiAiSldUIgp9' // {"alg": "HS256", "typ": "JWT"}

class TokenService {
  static async token2user(token) {
    let rlt = null
    const de_aes = crypto.createDecipher('aes-128-ecb', sec_key)
    const sha1 = crypto.createHmac('sha1', sec_key)
    try {
      const aes_token = token.split('.')[0]
      const sha1_token = token.split('.')[1]
      if(sha1_token === sha1.update(aes_token).digest('hex')){
        const payload_STR = de_aes.update(aes_token, 'hex','utf8') + de_aes.final('utf8');
        const payload = JSON.parse(payload_STR)
        const user = Mock.finduserbyname(payload.name)
        rlt = user ? payload.name : null
      }
    }catch(e){console.log(e)
    }
    return rlt
  }
  static async user2token(username) {
    let token = ''
    const aes = crypto.createCipher('aes-128-ecb', sec_key)
    const sha1 = crypto.createHmac('sha1', sec_key)
    try {
      const payload = { rand: Math.round(Math.random()*10), name: username, exp:Date.now() }
      const payload_STR = JSON.stringify(payload)
      console.log(payload)
      const aes_token = aes.update(payload_STR,'utf8','hex') + aes.final('hex');
      token = aes_token + '.' + sha1.update(aes_token).digest('hex')
    }catch(e){console.log(e)
    }
    return token
  }
  static async getbdinfo(username, uk) {
    let bdinfo = 3
    const user = Mock.finduserbyname(username)
    if(user.uks.filter(u=>u === uk)>0){
      bdinfo = Mock.finduk(uk)
    }
    return bdinfo
  }
}

export default TokenService;
