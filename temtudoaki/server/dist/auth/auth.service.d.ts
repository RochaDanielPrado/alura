import { HttpException } from '@nestjs/common';
import { UsersService } from '../app/users/users.service';
import { UserEntity } from 'src/app/users/users.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/app/token/token.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private tokenService;
    constructor(userService: UsersService, jwtService: JwtService, tokenService: TokenService);
    validateUser(email: string, password: string): Promise<UserEntity>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    loginToken(token: string): Promise<{
        access_token: string;
    } | HttpException>;
}
