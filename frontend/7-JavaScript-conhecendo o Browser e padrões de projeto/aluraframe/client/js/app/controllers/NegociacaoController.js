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
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');


        //this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($(`#mensagemView`)),
            `texto`);

        //this._mensagemView.update(this._mensagem);

        this._ordemAtual = ''; // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas

        this._service = new NegociacaoService();

        this._init();
    }

    _init() {

        this._service
            .lista()
            .then(negociacoes =>
                negociacoes.forEach(negociacao =>
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(erro => this._mensagem.texto = erro);

        setInterval(() => {
            this.importaNegociacoes();
        }, 3000);
    }

    adiciona(event) {

        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._service
            .cadastra(negociacao)
            .then(mensagem => {
                // adiciona a negociacao em uma lista
                this._listaNegociacoes.adiciona(this._criaNegociacao());

                this._mensagem.texto = mensagem;
                //this._mensagemView.update(this._mensagem);

                this._limpaFormulario();

                //console.log(this._listaNegociacoes.negociacoes);
            })
            .catch(erro => this._mensagem.texto = erro);


    }

    importaNegociacoes() {
        
        this._service
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = `Negociações importadas com sucesso`;
            }))
            .catch(erro => this._mensagem.texto = erro);

        // Promise.all([
        //     service.obterNegociacoesDaSemana(),
        //     service.obterNegociacoesDaSemanaAnterior(),
        //     service.obterNegociacoesDaSemanaRetrasada()]
        // ).then(negociacoes => {
        //     negociacoes
        //         .reduce((arrayAchatado, array) => arrayAchatado.concat(array, []))
        //         .forEach(negociacao =>
        //             this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = `Negociações importadas com sucesso`;
        // })
        //     .catch(erro => this._mensagem.texto = erro);

    }

    apaga() {

        this._service
            .apaga()
            .then(mensagem => {
                this._listaNegociacoes.esvazia();
                this._mensagem.texto = mensagem;
            })
            .catch(erro => this._mensagem.texto = erro);

    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

    }

    _limpaFormulario() {

        this._inputData.value = ``;
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();

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