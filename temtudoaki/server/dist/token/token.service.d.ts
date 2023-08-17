import { HttpException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { TokenEntity } from './token.entidy';
import { UsersService } from 'src/users/users.service';
import { UserEntity } from 'src/users/users.entity';
export declare class TokenService {
    private tokenRepository;
    private userService;
    private authService;
    constructor(tokenRepository: Repository<TokenEntity>, userService: UsersService, authService: AuthService);
    save(hash: string, username: string, userid: number): Promise<void>;
    refreshToken(oldToken: string): Promise<{
        access_token: string;
    } | HttpException>;
    getUsuarioByToken(token: string): Promise<UserEntity>;
    findAll(): Promise<TokenEntity[]>;
}
