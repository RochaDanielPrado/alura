import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Token } from './token.entidy';
import { UserEntity } from 'src/users/users.entity';

@Injectable()
export class TokenService {
  constructor(
    private tokenRepository: Repository<Token>,
    private userService: UsersService,
   // @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, username: string, userid: number) {
    let objToken = await this.tokenRepository.findOneBy({ username: username });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        username: username,
        userid: userid,
      });
    }
  }

  async refreshToken(oldToken: string) {
    let objToken = await this.tokenRepository.findOneBy({ hash: oldToken });
    if (objToken) {
      let user = await this.userService.findOne(objToken.username);
      return this.authService.login(user);
    } else {
      //é uma requisição inválida
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUsuarioByToken(token: string): Promise<UserEntity> {
    token = token.replace('Bearer ', '').trim();
    let objToken: Token = await this.tokenRepository.findOneBy({ hash: token });
    if (objToken) {
      let user = await this.userService.findOne(objToken.username);
      return user;
    } else {
      //é uma requisição inválida
      return null;
    }
  }
}
