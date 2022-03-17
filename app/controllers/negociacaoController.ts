import { isNamespaceExportDeclaration } from "../../node_modules/typescript/lib/typescript.js";
import { AnalisaTempoExecucao } from "../decorators/TempoExecucao.js";
import { clslstNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { diaSemana } from "../views/DiaSemana.js";
import { Negociacoes_Mensagens } from "../views/Negociacoes_Mensagem.js";
import { NegociacoesView } from "../views/Negociacoes_View.js";

export class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _lstNegociacao = new clslstNegociacoes();
    //Instancia da minha "classe" View vai receber o nome do elemento Html que vai renderizar meu template
    private _tblNegociacoesView = new NegociacoesView('#divTblNegociacoes');
    private _dvMensagemView = new Negociacoes_Mensagens('#divMensagem');

    //...as HtmlInputElement -> vai garantir para o compilador que o objeto vai ter conteudo
    constructor() {
        this._inputData = document.querySelector('#data') as HTMLInputElement;
        this._inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this._inputValor = document.querySelector('#valor') as HTMLInputElement;
        //this._tblNegociacoesView.template(); Carrega o cabeçalho da listagem 
        this._tblNegociacoesView.update(this._lstNegociacao);
    }

    /* Metodo atribuido ao botão submit -  que vai exibir nova Negociação */
    @AnalisaTempoExecucao()
    public adiciona() : void{
        const objChamarRegra = Negociacao._CriarNegociocao(
                this._inputData.value,
                this._inputQuantidade.value,
                this._inputValor.value
                );
        if(!this.ehDiaUtil(objChamarRegra.data)){
            this._dvMensagemView.update("Neogciações so podem ser geradas em dia úteis na semana");
            return;
        }
            this._lstNegociacao.adicionar(objChamarRegra);
            this.limparFormulario();
            this.atualizaView();
    }

    //Função com Regra de Negocio especifica da tela
    /*private criarNegociacao() : Negociacao{
        const expRegular = /-/g;
        const auxData = new Date(this._inputData.value.replace(expRegular, ','));
        const auxQtd = parseInt(this._inputQuantidade.value);
        const auxVlr = parseFloat(this._inputValor.value);

        return new Negociacao(auxData, auxQtd, auxVlr);
    }*/

    //Automatizando formulario, limpando campos e colocando cursor no primeiro campo
    public limparFormulario() : void{
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }

    private ehDiaUtil(data : Date) : boolean{
        return data.getDay() > diaSemana.DOMINGO
            && data.getDay() < diaSemana.SABADO;
    }
    
    private atualizaView() : void{
        this._tblNegociacoesView.update(this._lstNegociacao);
        this._dvMensagemView.update("Negociação incluida com sucesso.");
    }
}