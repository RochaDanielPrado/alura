class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); /* macete */

        this._inputData = $(`#data`);
        this._inputQuantidade = $(`#quantidade`);
        this._inputValor = $(`#valor`);
        /*
        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model));
        */

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($(`#negociacoesView`)),
            `adiciona`, `esvazia`, `ordena`, `inverteOrdem`
        );


        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($(`#mensagemView`)),
            `texto`);

        //this._mensagemView.update(this._mensagem);

        this._ordemAtual = ''; // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas

    }

    adiciona(event) {

        event.preventDefault();

        /* a data que recebemos do formulario é uma string
        necessitamos converte-la antes em Date
        existem várias maneiras
        
        substitui - por ,  
        let data = new Date(this._inputData.value.replace(/-/g, `,`))
        */

        DateHelper.textoParaData(this._inputData.value);

        // adiciona a negociacao em uma lista
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = `Negociação adicionada com sucesso!`;
        //this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        //console.log(this._listaNegociacoes.negociacoes);
    }

    importaNegociacoes() {

        let service = new NegociacaoService();

        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array, []))
                .forEach(negociacao =>
                    this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = `Negociações importadas com sucesso`;
        })
            .catch(erro => this._mensagem.texto = erro);

    }

    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = `Negociações apagadas com sucesso!`
        //this._mensagemView.update(this._mensagem);

    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    _limpaFormulario() {

        this._inputData.value = ``;
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        //this._inputData.focus();

    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

}