import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppErrors'
import { Request, Response } from 'express'
import { CreateRoleUseCase } from './CreateRoleUsecase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body
    const role = this.createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
