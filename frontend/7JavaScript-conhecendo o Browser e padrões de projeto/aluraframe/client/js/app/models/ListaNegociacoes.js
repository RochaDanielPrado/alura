class ListaNegociacoes {

    constructor(){
        
        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        // Blinda o array negociacoes.  mostra somente uma copia do original
        return [].concat(this._negociacoes);
    }
}