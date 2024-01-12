// src/entities/post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  caption: string;

  @Column('simple-array')
  tags: string[];

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
