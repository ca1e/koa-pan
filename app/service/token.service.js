import Mock from '../models/mock'

import crypto from 'crypto'
import { sec } from '../config'

const HEADER_BASE64 = 'ewogICJhbGciOiAiSFMyNTYiLAogICJ0eXAiOiAiSldUIgp9' // {"alg": "HS256", "typ": "JWT"}
const CIPHER = 'aes-128-ecb'

class TokenService {
  static async token2user(token) {
    let rlt = null
    const de_aes = crypto.createDecipher(CIPHER, sec.key, sec.iv)

    try {
      const payload_STR = de_aes.update(token, 'hex','utf8') + de_aes.final('utf8');
      const payload = JSON.parse(payload_STR)
      const user = Mock.finduserbyname(payload.name)
      rlt = user ? payload.name : null
    }catch(e){console.log(e)
    }
    return rlt
  }
  static async user2token(username) {
    let token = ''
    const aes = crypto.createCipher(CIPHER, sec.key, sec.iv)
    const payload = {
      name: username,
      rand: Math.round(Math.random()*10),
      iat:Date.now()
    }
    console.log(payload)

    try {
      const payload_STR = JSON.stringify(payload)
      token = aes.update(payload_STR,'utf8','hex') + aes.final('hex');
    }catch(e){console.log(e)
    }
    return token
  }
  static async getbdinfo(username, uk) {
    let bdinfo = 3
    const user = Mock.finduserbyname(username)
    if(user.uks.filter(u=>u === uk).length>0){
      bdinfo = Mock.finduk(uk)
    }
    return bdinfo
  }
}

export default TokenService;
