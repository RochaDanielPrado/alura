// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clidado com duplo click");
//         this.remove();
//     });
// })

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    var alvoEvent = event.target;
    var paiDoAlvo = alvoEvent.parentNode; //TR

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function () {
        paiDoAlvo.remove();
    }, 500);
});

