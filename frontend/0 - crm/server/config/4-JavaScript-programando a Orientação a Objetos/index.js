import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
diretor.cadastraSenha(123456789);

const gerente = new Gerente("Ricardo", 5000, 2345678901);
gerente.cadastraSenha(123)

const cliente = new Cliente("Lais", 78964410668, 456);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456789);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 123);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456);

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

