class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
        //this._armadilha = armadilha;
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        //altera o contexto para Negociacoes
        // Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }

    get negociacoes() {
        // Blinda o array negociacoes.  mostra somente uma copia do original
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        // Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}