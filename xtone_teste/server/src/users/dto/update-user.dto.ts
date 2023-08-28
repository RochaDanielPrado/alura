import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;

    phone: string;
    
}