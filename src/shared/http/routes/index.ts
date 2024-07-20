import { AppError } from '@shared/errors/AppErrors'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso NEGADO')
  return response.json({ message: 'ola dev' })
})

export { routes }
