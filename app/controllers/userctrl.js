import ResponseInfo from '../lib/response.info'
import {COMMON_ERROR, USER_ERROR} from '../lib/errormsg'
import UserService from '../service/user.service'
import TokenService from '../service/token.service'

class UserCtrl {
  static async login(ctx) {
    const ctx_query = ctx.query
    const ctx_body = ctx.request.body
    const username = ctx_body.name
    const password = ctx_body.password
    const clienttype = ctx_query.clienttype

    let result = -1
    ctx.body = ResponseInfo.failedresponse(result, COMMON_ERROR[Math.abs(result)])

    if(username && password) {
      result = await UserService.login(username, password)
      if(result === 0) {
        const token = await TokenService.user2token(username)
        ctx.body = ResponseInfo.successresponse({token: token})
      }else{
        ctx.body = ResponseInfo.failedresponse(result, USER_ERROR[result])
      }
    }
  }
  static async userlist(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token

    let result = -1
    ctx.body = ResponseInfo.failedresponse(result, COMMON_ERROR[Math.abs(result)])

    if(token) {
      const username = await TokenService.token2user(token)
      if(!username){
        result = 1
        ctx.body = ResponseInfo.failedresponse(result, USER_ERROR[result])
      }else{
        const userlist = await UserService.userlist(username)
        ctx.body = ResponseInfo.successresponse({userlist: userlist})
      }
    }
  }
}

export default UserCtrl;
