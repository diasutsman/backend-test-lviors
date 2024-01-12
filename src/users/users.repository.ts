// src/repositories/user.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  createUser(createUserDto: CreateUserDto) {
    const user = this.create(createUserDto);
    return this.save(user);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.update(id, updateUserDto);
  }

  async removeUser(id: number): Promise<void> {
    const userToRemove = await this.findOneBy({
      id,
    });
    await this.remove(userToRemove);
  }
}
