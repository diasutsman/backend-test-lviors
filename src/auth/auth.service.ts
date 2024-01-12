import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(login: string, password: string) {
    const user = await this.usersService.findOneEmailOrUsername(login);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(user?.password, password);
    if (isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
