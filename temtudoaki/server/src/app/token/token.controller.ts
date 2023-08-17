import { Body, Controller, Get, Put } from '@nestjs/common';
import { TokenService } from './token.service';
import { RefreshTokenDto } from './dto/refresh.token.dto';
import { TokenEntity } from './token.entity';

@Controller('token')
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return this.tokenService.refreshToken(data.oldToken);
  }

  @Get('listar')
  async listar(): Promise<TokenEntity[]> {
    return this.tokenService.findAll();
  }
}
