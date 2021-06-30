import Koa = require('koa')

import koaBody = require('koa-body')
import logger = require('koa-logger')
import router from './router'
// import cors = require('koa2-cors')
const port = 8088
const app = new Koa()
// app.use(cors());
app.use(koaBody())
app.use(logger())
app.use(router.routes())
app.listen(port, () => {
  console.log(`listening on http://0.0.0.0:${port}`)
	console.log('启动成功！');
})
