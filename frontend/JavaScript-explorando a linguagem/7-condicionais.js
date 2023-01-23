console.log(`Operadores Lógicos - condicionais`);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = true;
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `João Pessoa`);

listaDeDestinos.push(`Belo Horizonte`); // adiciona valores a lista
console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);

//     console.log(listaDeDestinos);
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador menor de idade");

// };

if (idadeComprador >= 18 || estaAcompanhada) {
    
    listaDeDestinos.splice(1, 1);
    temPassagemComprada = true;
} else {
    console.log("Não é maior de idade e nao posso vender");
};

console.log("Embarque: \n \n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);