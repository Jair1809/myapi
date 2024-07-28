import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRoleUseCase } from './CreateRoleUsecase'
import { CreateRoleController } from './createRoleController'

const rolesRepository = new RolesRepository()

const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)
