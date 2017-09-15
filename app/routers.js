import Router from 'koa-router'

import Pan from './controllers/pan'
import User from './controllers/user'

const router = Router({
    prefix: '/api'
})

router.get('/info/:uk', async (ctx) => {
    const uk = ctx.params.uk || ''
    ctx.body = await Pan.info(uk)
})

export default router