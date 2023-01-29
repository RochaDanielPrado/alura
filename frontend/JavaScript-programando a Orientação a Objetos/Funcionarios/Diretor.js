import { Funcionário } from "./Funcionario.js";

export class Diretor extends Funcionário {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 2;
    }
}