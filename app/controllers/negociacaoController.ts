import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    /* Metodo atribuido ao botão submit -  que vai exibir nova Negociação */
    public adiciona() : void{
        const objChamarRegra = this.criarNegociacao();
        console.log(objChamarRegra);
        this.limparFormulario();
    }

    //Função com Regra de Negocio especifica da tela
    criarNegociacao() : Negociacao{
        const expRegular = /-/g;
        const auxData = new Date(this._inputData.value.replace(expRegular, ','));
        const auxQtd = parseInt(this._inputQuantidade.value);
        const auxVlr = parseFloat(this._inputValor.value);

        return new Negociacao(auxData, auxQtd, auxVlr);
    }

    //Automatizando formulario, limpando campos e colocando cursor no primeiro campo
    limparFormulario() : void{
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }
}