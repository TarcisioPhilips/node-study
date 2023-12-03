const express = require("express");

const projects = [
  {
    id: 1,
    name: "First project",
    description: "My Project",
    author: "tar"
  },
  {
    id: 2,
    name: "Second project",
    description: "My Project",
    author: "tar"
  },
]

const app = express()

const router = express.Router()

router.get('/projects', (request, response) =>{
  const {id} = request.query

  if(!id){
    return response.status(200).send(projects)
  }

  const projectById = projects.filter((project) => project.id ==id)

  if(projectById.length >0) {
    return response.status(200).send(projectById)
  }

  return response.status(500).send({error: "project not found"})
})

app.use(router)

app.listen(3000, () => {
  console.log("Server Started at port 3000")
})