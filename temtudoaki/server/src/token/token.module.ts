import { Module, forwardRef } from '@nestjs/common';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from './token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TokenEntity]),
    forwardRef(() => AuthModule), 
    forwardRef(() => UsersModule),
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
