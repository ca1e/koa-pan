import Router from 'koa-router'

import {PanCtrl,UserCtrl} from './controllers'

const router = Router({
    prefix: '/api'
})

router.post('/signup', UserCtrl.signup)
.post('/login', UserCtrl.login)
.post('/binding', UserCtrl.binding)
.get('/userlist', UserCtrl.userlist)
.get('/userinfo', PanCtrl.userinfo)
.get('/filelist', PanCtrl.filelist)
.get('/cFolder', PanCtrl.createfile)
.get('/deleteFile', PanCtrl.deletefile)
.post('/filelinks', PanCtrl.filelinks)

export default router