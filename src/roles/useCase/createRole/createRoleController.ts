import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppErrors'
import { Request, Response } from 'express'

export class CreateRoleController {
  handle(request: Request, response: Response): Response {
    const { name } = request.body
    const rolesRepository = new RolesRepository()
    const roleAlreadyExistis = rolesRepository.findByName(name)
    if (roleAlreadyExistis) {
      throw new AppError('Este nome já existe, insira um nome valido')
    }
    const role = rolesRepository.create({ name })

    return response.status(201).json(role)
  }
}
