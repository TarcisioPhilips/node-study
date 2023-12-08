import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// query parameters: URL Stateful -> Filtros, paginação, n obrigatórios
// route parameters: Identificação de Recurso
// request body: Envio de informações de um formulário

// http://localhost:3333/users?userId=1&name=Tar
// http://localhost:3333/users/1

const server = http.createServer( async(req, res) => {
  const {method, url}  = req

  await json(req,res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if(route){
    const routeParams = req.url.match(route.path)
    req.params = {...routeParams.groups}

    return route.handler(req,res)
  }

  return res.writeHead(404).end()
})

server.listen(3333)

