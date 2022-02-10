import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    /* Metodo atribuido ao botão submit -  que vai exibir nova Negociação */
    adiciona() {
        const objChamarRegra = this.criarNegociacao();
        console.log(objChamarRegra);
        this.limparFormulario();
    }
    //Função com Regra de Negocio especifica da tela
    criarNegociacao() {
        const expRegular = /-/g;
        const auxData = new Date(this._inputData.value.replace(expRegular, ','));
        const auxQtd = parseInt(this._inputQuantidade.value);
        const auxVlr = parseFloat(this._inputValor.value);
        return new Negociacao(auxData, auxQtd, auxVlr);
    }
    //Automatizando formulario, limpando campos e colocando cursor no primeiro campo
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
