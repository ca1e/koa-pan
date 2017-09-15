import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
import logger from 'koa-logger'

import cors from './middleware/corsMiddleware'

import router from './routers'
import moo from './db'
import { port } from './config'

const app = new Koa()

app.jsonSpaces = 0 // 压缩json返回中的空格
app.keys = ['secretkey']

app.use(cors)
app.use(logger()).use(json()).use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`✅ The server is running at http://localhost:${port}/`))

export default app