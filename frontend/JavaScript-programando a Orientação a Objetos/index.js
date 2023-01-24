import { cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.nome = cliente1;

const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.nome = cliente2;

contaCorrenteRicardo.depositar(500);

contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
