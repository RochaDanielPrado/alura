var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("fui clidado com duplo click");
        this.remove();
    });
})