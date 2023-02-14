class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); /* congela a instancia _
        proteje as variaveis contra alteracoes */

    }

    /* macete importante - o metodo get + nome() getVolume() 
    
    console.log(n1.data(), n1.quantidade(),
        n1.valor(), n1.volume());
    
    console.log(n1.data, n1.quantidade,
        n1.valor, n1.volume);


        NAO NECESSITA DOS PARENTESES, POIS O get JA INTERPRETA
    */
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        /* programação defensiva */
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}