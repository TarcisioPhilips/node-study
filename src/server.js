import http from 'node:http'
import { json } from './middlewares/json.js'


// Stateful (info sendo guardada em memória, depende disso. Caiu, funciona dif)
// Stateless (salva em coisas externas (app, bd))

// JSON - Transição de dados entre back <> front e back <> back

// Cabeçalhos  (Req/ Res) => Metadados

const users = []

const server = http.createServer( async(req, res) => {
  const {method, url}  = req

  await json(req,res)

  if (method === 'GET' && url === '/users'){
    return res
      .end(JSON.stringify(users))

  }

  if (method === 'POST' && url === '/users'){
    const {name, email} = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)

