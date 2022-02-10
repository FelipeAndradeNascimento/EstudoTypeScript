export class Negociacao {
    private _data:Date;
    private _quantidade:number;
    private _valor:number;

    //Construtor para receber valores da classe
    constructor(varData: Date, varQuantidade: number, varValor: number){
        this._data = varData;
        this._quantidade = varQuantidade;
        this._valor = varValor;
    }

    //Getters para retornar valores das variaveis privadas
    get data():Date { return this._data; }
    get quantidade() : number{ return this._quantidade; }
    get valor() : number{ return this._valor; }
    get volume() : number{ return this._quantidade * this._valor; }
}