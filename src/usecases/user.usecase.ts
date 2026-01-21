import type { User } from "../generated/prisma/browser.js";
import { UserRepository } from "../interfaces/users.interface.js";
import { UserRepositoryPrisma } from "../repositories/user.repositorie.js";

class UserUseCase {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryPrisma();
  }

  async create({ name, emmail }: UserCreate): Promise<User> {
}
