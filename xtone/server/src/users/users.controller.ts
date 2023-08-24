import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('listar')
  async listar(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post('cadastrar')
  async cadastrar(@Body() body: CreateUserDto): Promise<ResultadoDto> {
    return this.userService.store(body);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return null; //this.authService.login(req.user);
  }

  @Post('login-token')
  async loginToken(@Request() req, @Body() data) {
    return null; //this.authService.loginToken(data.token);
  }
}
