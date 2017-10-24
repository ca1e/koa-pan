import ResponseInfo from '../lib/response.info'
import { COMMON_ERROR, USER_ERROR, FILE_ERROR } from '../lib/errormsg'
import PanService from '../service/pan.service'
import TokenService from '../service/token.service'

class PanCtrl {
  static async userinfo(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token
    const uk = ctx_query.uk

    let result = -1
    ctx.body = ResponseInfo.failedresponse(result, COMMON_ERROR[Math.abs(result)])

    if(token && uk) {
      const username = await TokenService.token2user(token)
      if(username){
        const bdinfo = await TokenService.getbdinfo(username, uk)
        if(typeof bdinfo === 'object') {
          const info = await PanService.getinfo(bdinfo)
          if(typeof info === 'object') {
            ctx.body = ResponseInfo.successresponse(info)
          }else{
            result = info
            ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
          }
        }else{
          result = bdinfo
          ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
        }
      }
      else{
        result = 1
        ctx.body = ResponseInfo.failedresponse(result, USER_ERROR[result])
      }
    }
  }
  static async filelist(ctx) {
    const ctx_query = ctx.query
    const token = ctx_query.token
    const uk = ctx_query.uk
    const path = ctx_query.path || '/'

    let result = -1
    ctx.body = ResponseInfo.failedresponse(result, COMMON_ERROR[Math.abs(result)])

    if(token && uk) {
      const username = await TokenService.token2user(token)
      if(username){
        const bdinfo = await TokenService.getbdinfo(username, uk)
        if(typeof bdinfo === 'object'){
          const list = await PanService.getlist(bdinfo, path)
          if(typeof list === 'object') {
            ctx.body = ResponseInfo.successresponse(list)
          }else{
            result = list
            ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
          }
        }else{
          result = bdinfo
          ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
        }
      }else{
        result = 1
        ctx.body = ResponseInfo.failedresponse(result, USER_ERROR[result])
      }
    }
  }
  static async filelinks(ctx) {
    const ctx_query = ctx.query
    const ctx_body = ctx.request.body
    const token = ctx_query.token
    const uk = ctx_query.uk
    const files = ctx_body.files

    let result = -1
    ctx.body = ResponseInfo.failedresponse(result, COMMON_ERROR[Math.abs(result)])

    if(token && uk && files) {
      const username = await TokenService.token2user(token)
      if(username){
        const bdinfo = await TokenService.getbdinfo(username, uk)
        if(typeof bdinfo === 'object'){
          const links = await PanService.downloads(bdinfo, files)
          if(typeof links === 'object') {
            ctx.body = ResponseInfo.successresponse(links)
          }else{
            result = links
            ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
          }
        }else{
          result = bdinfo
          ctx.body = ResponseInfo.failedresponse(result, FILE_ERROR[result])
        }
      }else{
        result = 1
        ctx.body = ResponseInfo.failedresponse(result, USER_ERROR[result])
      }
    }
  }
}

export default PanCtrl;
