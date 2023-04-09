export class Personagem {
    nome;
    vida;
    mana;
    #level;
    tipo;
    descricao;

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
        //this.static tipo = tipo;
        this.vida = 100;
        this.mana = 100;
    }

    get level() {
        return this.#level;
    }

    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    set level(novoLevel) {
        if(novoLevel >= 0 && novoLevel <= 10 ){
            this.#level = novoLevel;
        }
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`; 
        }
        return `${this.constructor.tipo} iniciante`;
    }

    static verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return 'Empate!'
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
    }
}