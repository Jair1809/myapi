import { createRolesController } from '@roles/useCase/createRole'
import { listRolesController } from '@roles/useCase/listRoles'

import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

export { rolesRouter }
