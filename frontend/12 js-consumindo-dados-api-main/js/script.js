async function buscaEndereco(cep) {
    let mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";
    
    try {
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const consultaCepConvertida = await consultaCep.json();

        if (consultaCepConvertida.erro) {
            throw Error('CEP inexistente!');
        }

        let cidade = document.querySelector('#cidade');
        let logradouro = document.querySelector('#endereco');
        let bairro = document.querySelector('#bairro');
        let estado = document.querySelector('#estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);

        return consultaCepConvertida;

    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
}


let cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));