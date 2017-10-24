import Router from 'koa-router'

import {PanCtrl,UserCtrl} from './controllers'

const router = Router({
    prefix: '/api'
})

router.post('/signup', UserCtrl.signup)
.post('/login', UserCtrl.login)
.get('/userlist', UserCtrl.userlist)
.get('/userinfo', PanCtrl.userinfo)
.get('/filelist', PanCtrl.filelist)
.post('/filelinks', PanCtrl.filelinks)

export default router