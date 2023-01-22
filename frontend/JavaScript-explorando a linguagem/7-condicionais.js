console.log(`Operadores Lógicos - condicionais`);

const idadeComprador = 21;
const listaDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`, 
    `Rio de Janeiro`, 
    `João Pessoa`);

listaDeDestinos.push(`Belo Horizonte`); // adiciona valores a lista
console.log("Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);

    console.log(listaDeDestinos);
}else{
    console.log("Comprador menor de idade");
};

