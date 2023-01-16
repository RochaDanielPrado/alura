
// Hello World 
console.log("Hello World!");
//console.log(document);
//console.log(document.querySelector("h1"));

// Muda Titulo
var titulo = document.querySelector(".titulo"); //boa pratica - localiza pela classe
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Daniel Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

        //console.log(pacientes[i]);
        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;
        // console.log(paciente);
        // console.log(tdPeso);
        // console.log(peso);

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
        // console.log(tdAltura);
        // console.log(altura);

        // calculo imc

        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);

        var tdImc = paciente.querySelector(".info-imc");

        if( !pesoEhValido) {

            tdImc.textContent = "Peso Inválido";
            paciente.style.color = "white";
            paciente.style.backgroundColor = "lightcoral";
            //console.log("peso inválido")
        }

        if(!alturaEhValida) {

            tdImc.textContent = "Altura Inválida";
            paciente.classList.add("paciente-invalido");
        }

        if(pesoEhValido && alturaEhValida){

            var imc = calculaImc(peso, altura);

            tdImc.textContent = imc;
        }
    }


function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if(peso >= 0 && peso < 260) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if(altura >= 0 && altura <= 2.5) {
        return true;
    } else {
        return false;
    }
}



