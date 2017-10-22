import UserService from '../service/user.service'
import TokenService from '../service/token.service'

class UserCtrl {
  static async login(ctx) {
    const ctx_query = ctx.query
    const ctx_body = ctx.request.body
    const username = ctx_body.name || ''
    const password = ctx_body.password || ''
    const clienttype = ctx_query.clienttype || ''

    const user = await UserService.login(username, password)
    if(user.name){
      ctx.body = await TokenService.user2token(user)
    }else{
      ctx.body = user
    }
  }
  static async userlist(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token || ''

    const username = await TokenService.token2user(token)
    const userlist = await UserService.userlist(username)
    ctx.body = userlist
  }
}

export default UserCtrl;
