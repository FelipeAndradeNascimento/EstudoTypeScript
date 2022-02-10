export class Negociacao {
    //Construtor para receber valores da classe
    constructor(varData, varQuantidade, varValor) {
        this._data = varData;
        this._quantidade = varQuantidade;
        this._valor = varValor;
    }
    //Getters para retornar valores das variaveis privadas
    get data() { return this._data; }
    get quantidade() { return this._quantidade; }
    get valor() { return this._valor; }
    get volume() { return this._quantidade * this._valor; }
}
