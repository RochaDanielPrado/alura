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
import { enumTypesUm } from 'src/helpers/mesures-units.helper';

@Entity({ name: 'sb1' })
export class sb1Entity {
  @PrimaryGeneratedColumn()
  b1_id: number;

  @Column({ length: 100 })
  b1_tipo: string;

  @Column({ length: 100, unique: true })
  b1_modelo: string;

  @Column({ length: 100 })
  b1_description: string;

  @Column({ length: 100 })
  b1_supply: string;

  @Column({ length: 100 })
  b1_group: string;

  @Column({ type: 'enum', enum: enumTypesUm, default: enumTypesUm.a })
  b1_um: enumTypesUm;

  @Column('float')
  b1_prv1: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  //   @BeforeInsert()
  //   @BeforeUpdate()
  //   async hashPassword() {
  //     this.password = await hashSync(this.password, 10);
  //   }
}
