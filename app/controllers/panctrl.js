import PanService from '../service/panservice'
import UserService from '../service/userservice'

class PanCtrl {
  static async userinfo(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token || ''
    const uk = ctx_query.uk || ''
    const user = await UserService.getuser_local(token, uk)
    const info = await PanService.getinfo(user)
    ctx.body = info
  }
  static async filelist(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token || ''
    const uk = ctx_query.uk || ''
    const path = ctx_query.path || '/'
    const user = await UserService.getuser_local(token, uk)
    const info = await PanService.getlist(user, path)
    ctx.body = info
  }
}

export default PanCtrl;
