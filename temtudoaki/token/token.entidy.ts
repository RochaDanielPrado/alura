import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255 })
  hash: string;

  @IsNotEmpty()
  @Column({ length: 100 })
  username: string;

  @IsNotEmpty()
  @Column()
  userid: number;
}
