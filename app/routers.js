import Router from 'koa-router'

import {PanCtrl,UserCtrl} from './controllers'

const router = Router({
    prefix: '/api'
})

router.get('/userinfo', PanCtrl.userinfo)
router.get('/filelist', PanCtrl.filelist)

export default router