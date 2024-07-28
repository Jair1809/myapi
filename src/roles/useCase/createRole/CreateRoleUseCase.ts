import { Role } from '@roles/entities/Roles'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppErrors'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExistis = this.rolesRepository.findByName(name)
    if (roleAlreadyExistis) {
      throw new AppError('Este nome já existe, insira um nome valido')
    }
    return this.rolesRepository.create({ name })
  }
}
