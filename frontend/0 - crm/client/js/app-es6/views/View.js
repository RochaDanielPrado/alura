export class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {
        // sobe um erro indicando a obrigatoridade deste metodo nas classes que herdam esta
        throw new Error(`O método _template deve ser implementado`);
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}