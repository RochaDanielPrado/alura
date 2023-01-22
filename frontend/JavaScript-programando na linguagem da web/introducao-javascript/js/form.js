// adicionar paciente

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
    event.preventDefault(); // previne que o botao recarregue a pagina
    
    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        //console.log("Paciente Inválido!");
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset();

    var mensagensDeErro = document.querySelector("#mensagem-erro");
    
    mensagensDeErro.innerHTML = "";

    console.log(tabela);

} );

function adicionaPacienteNaTabela(paciente) {
    // Cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }
    
    if(!validaPeso(paciente.peso)) {
        erros.push("O Peso éInválido!");
    } 

    if(!validaAltura(paciente.altura)){

        erros.push("A Altura é Inválida!");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco!");
    }
    
    if(paciente.peso.length == 0) {
        erros.push("A peso não pode ser em branco!");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco!");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagem-erro");
    
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}    
