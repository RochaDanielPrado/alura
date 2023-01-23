console.log(`O\nperadores Lógicos - condicionais`);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba"

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `João Pessoa`);

listaDeDestinos.push(`Belo Horizonte`); // adiciona valores a lista
console.log("\nDestinos possíveis\n");

const podeCompar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
let destinoExiste = false;

while (contador < 5) {

    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe!");
        destinoExiste = true;
        break;
    };
    
    contador += 1;
};

if (podeCompar && destinoExiste) {

    listaDeDestinos.splice(1, 1);
    temPassagemComprada = true;
} else {
    console.log("Não é maior de idade e nao posso vender");
    temPassagemComprada = false;
};

console.log("\nEmbarque:  \n");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar!");
};

console.log(listaDeDestinos);
