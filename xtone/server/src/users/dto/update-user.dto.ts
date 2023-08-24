import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;

    phone: string;
    
    cpf: string;
}