import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'token' })
export class TokenEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @Column({ length: 255 })
  hash: string;

  @IsNotEmpty()
  @Column({ length: 100 })
  username: string;

  @IsNotEmpty()
  @Column()
  userid: string;
}