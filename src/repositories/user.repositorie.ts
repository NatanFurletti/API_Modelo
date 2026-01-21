import {
  User,
  UserCreate,
  UserRepository,
} from "../interfaces/users.interface.js";

class UserRepositoryPrisma implements UserRepository {
  asynccreate(data: UserCreate): Promise<User> {
    // Implementation here
  }
}

export { UserRepositoryPrisma };
