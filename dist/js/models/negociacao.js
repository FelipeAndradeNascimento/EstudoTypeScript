export class Negociacao {
    constructor(_varData, _varQuantidade, _varValor) {
        this._varData = _varData;
        this._varQuantidade = _varQuantidade;
        this._varValor = _varValor;
    }
    get data() { return this._varData; }
    get quantidade() { return this._varQuantidade; }
    get valor() { return this._varValor; }
    get volume() { return this._varQuantidade * this._varValor; }
    static _CriarNegociocao(parmData, parmQtd, parmValor) {
        const expRegular = /-/g;
        const auxData = new Date(parmData.replace(expRegular, ','));
        const auxQtd = parseInt(parmQtd);
        const auxVlr = parseFloat(parmValor);
        return new Negociacao(auxData, auxQtd, auxVlr);
    }
}
