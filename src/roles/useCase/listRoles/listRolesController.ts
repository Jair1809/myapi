import { Request, Response } from 'express'
import { ListRolesUseCase } from './listRolesUseCase'

export class ListRolesControler {
  constructor(private listRolesUseCase: ListRolesUseCase) {}
  handle(request: Request, response: Response): Response {
    const roles = this.listRolesUseCase.execute()
    return response.json(roles)
  }
}
