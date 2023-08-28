import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find({
      select: ['id', 'name', 'email', 'phone'],
    });
  }

  findOne(email: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async store(data: CreateUserDto): Promise<ResultadoDto> {
    const user = this.usersRepository.create(data);
    let msg = `Houve um errro ao cadastrar o usuário`;

    return await this.usersRepository
      .save(user)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: `Usuário cadastrado com sucesso`,
        };
      })
      .catch((error) => {
        if (error.code === 'ER_DUP_ENTRY') {
          msg = `User ${data.email} already exist! `;
        }

        return <ResultadoDto>{
          status: false,
          mensagem: msg,
        };
      });
  }
}
