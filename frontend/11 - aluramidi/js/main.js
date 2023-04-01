const listaDeTeclas = document.querySelectorAll('.tecla');


function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou Seletor inválido');
    }

}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    tecla.onclick = () => {
        tocaSom(`#som_${instrumento}`)
    };

    tecla.onkeydown = (evento) => {

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {

        tecla.classList.remove('ativa');
    }

}

