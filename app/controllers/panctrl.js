import PanService from '../service/pan.service'
import TokenService from '../service/token.service'

class PanCtrl {
  static async userinfo(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token || ''
    const uk = ctx_query.uk || ''

    const user = await TokenService.token2user(token)
    const bdinfo = await TokenService.getbdinfo(user, uk)
    const info = await PanService.getinfo(bdinfo)
    ctx.body = info
  }
  static async filelist(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token || ''
    const uk = ctx_query.uk || ''
    const path = ctx_query.path || '/'

    const user = await TokenService.token2user(token)
    const bdinfo = await TokenService.getbdinfo(user, uk)
    const info = await PanService.getlist(bdinfo, path)
    ctx.body = info
  }
}

export default PanCtrl;
