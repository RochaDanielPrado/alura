class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); /* macete */

        this._inputData = $(`#data`);
        this._inputQuantidade = $(`#quantidade`);
        this._inputValor = $(`#valor`);

    }

    adiciona(event) {

        event.preventDefault();

        /* a data que recebemos do formulario é uma string
        necessitamos converte-la antes em Date
        existem várias maneiras
        
        substitui - por ,  
        let data = new Date(this._inputData.value.replace(/-/g, `,`))
        */

        let data = new Date(...
            this._inputData.value
                .split(`-`)
                .map((item, indice) => {
                    if (indice == 1) {
                        return item - 1;
                    } return item;
                }));


        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        let diaMesAno = negociacao.data.getDate()
            + `/` + (negociacao.data.getMonth() + 1)
            + `/` + negociacao.data.getFullYear();

        console.log(diaMesAno);


        // adiciona a negociacao em uma lista
    }
}