import { TokenService } from './token.service';
import { RefreshTokenDto } from './dto/refresh.token.dto';
import { TokenEntity } from './token.entidy';
export declare class TokenController {
    private tokenService;
    constructor(tokenService: TokenService);
    refreshToken(data: RefreshTokenDto): Promise<{
        access_token: string;
    } | import("@nestjs/common").HttpException>;
    listar(): Promise<TokenEntity[]>;
}
