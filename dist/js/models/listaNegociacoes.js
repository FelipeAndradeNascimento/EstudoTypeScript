export class clslstNegociacoes {
    constructor() {
        this.lstnegociacoes = [];
    }
    adicionar(novaNegociacao) {
        this.lstnegociacoes.push(novaNegociacao);
    }
    listar() {
        return this.lstnegociacoes;
    }
}
