export class DateHelper {

    constructor() {

        throw new Error(`DateHelper não pode ser instanciada [static]`);
    }

    //static - métodos que podem ser envocados diretamente na classe - sem instancia
    static dataParaTexto(data) {
        
        let dia = String(new Date(data).getDate()).padStart(2, `0`);
        let mes = String(new Date(data).getMonth() +1).padStart(2, `0`);
        
        return `${dia}/${mes}/${new Date(data).getFullYear()}`;

    }

    static textoParaData(texto) {
        // Valida com Templete String
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error(`Deve estar no formato aaaa-mm-dd`)
            
        return new Date(...
            texto.split(`-`).map((item, indice) => item - indice % 2));

    }
}