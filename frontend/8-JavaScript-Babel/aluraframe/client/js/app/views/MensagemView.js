class MensagemView extends View {

    constructor(elemento) {
        super(elemento);

    }

    template(model) {
        // testa se model > vazio ou nulo
        return model.texto ? `<p class="aletr alert-info">${model.texto}</p>` : `<p></p>`;
    }
}