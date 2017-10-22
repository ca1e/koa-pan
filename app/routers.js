import Router from 'koa-router'

import {PanCtrl,UserCtrl} from './controllers'

const router = Router({
    prefix: '/api'
})

router.post('/login', UserCtrl.login)
router.get('/userlist', UserCtrl.userlist)
router.get('/userinfo', PanCtrl.userinfo)
router.get('/filelist', PanCtrl.filelist)

export default router