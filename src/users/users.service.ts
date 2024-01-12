import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UsersRepository,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findOne(id) {
    return this.userRepository.findOneBy({ id });
  }

  findOneEmailOrUsername(login: string) {
    return this.userRepository
      .createQueryBuilder()
      .where('username = :login', { login })
      .orWhere('email = :login', { login })
      .getOne();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.removeUser(id);
  }
}
