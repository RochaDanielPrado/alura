import { IsAlphanumeric, IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateSb1Dto {

    @IsNotEmpty()
    b1_tipo: string;

    @IsNotEmpty()
    b1_modelo: string;

    @IsNotEmpty()
    b1_description: string;

    @IsNotEmpty()
    b1_supply: string;

    @IsNotEmpty()
    b1_group: string;

    @IsNotEmpty()
    b1_um: string;

}
