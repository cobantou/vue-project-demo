var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('mock/db.json')
var middlewares = jsonServer.defaults()
var port=3000

server.use(middlewares)
server.use(router)
server.listen(port, function () {
  console.log('JSON Server is running')
  console.info("Listening at http://localhost:"+port)
})