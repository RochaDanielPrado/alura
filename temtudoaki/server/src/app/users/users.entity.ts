import { hashSync } from 'bcrypt';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeUpdate,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 15 })
  phone: string;

  @Column({ length: 14 })
  cpf: string;

  // @OneToMany(() => Servico, servico => servico.usuario)
  // services: Service[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hashSync(this.password, 10);
  }
}
