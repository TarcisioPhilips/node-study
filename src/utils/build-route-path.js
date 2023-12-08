// /users/:id

export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g //pega o primeiro id
  const pathWithParams = path.replaceAll(routeParametersRegex,'(?<$1>[a-z0-9\-_]+)') //$1 pega o nome da variável

  const pathRegex = new RegExp(`^${pathWithParams}`)
  return pathRegex
}