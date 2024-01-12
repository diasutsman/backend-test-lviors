import { ApiProperty } from '@nestjs/swagger';

// src/dto/user.dto.ts
export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty()
  username?: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  password?: string;
}
