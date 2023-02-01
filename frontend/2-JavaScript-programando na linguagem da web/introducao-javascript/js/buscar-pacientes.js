var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    console.log("buscar pacientes");

    var erroAjax = document.querySelector("#erro-ajax");
    var xhr = new XMLHttpRequest();
    var endereco = "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json";

    xhr.open("GET", endereco);

    xhr.addEventListener("load", function(){
        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // transforma string to array
            
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente); 
            });  
        } else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        };
    });

    
    xhr.send();

});