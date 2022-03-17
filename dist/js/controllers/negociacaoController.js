var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AnalisaTempoExecucao } from "../decorators/TempoExecucao.js";
import { clslstNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { diaSemana } from "../views/DiaSemana.js";
import { Negociacoes_Mensagens } from "../views/Negociacoes_Mensagem.js";
import { NegociacoesView } from "../views/Negociacoes_View.js";
export class NegociacaoController {
    constructor() {
        this._lstNegociacao = new clslstNegociacoes();
        this._tblNegociacoesView = new NegociacoesView('#divTblNegociacoes');
        this._dvMensagemView = new Negociacoes_Mensagens('#divMensagem');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._tblNegociacoesView.update(this._lstNegociacao);
    }
    adiciona() {
        const objChamarRegra = Negociacao._CriarNegociocao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.ehDiaUtil(objChamarRegra.data)) {
            this._dvMensagemView.update("Neogciações so podem ser geradas em dia úteis na semana");
            return;
        }
        this._lstNegociacao.adicionar(objChamarRegra);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    ehDiaUtil(data) {
        return data.getDay() > diaSemana.DOMINGO
            && data.getDay() < diaSemana.SABADO;
    }
    atualizaView() {
        this._tblNegociacoesView.update(this._lstNegociacao);
        this._dvMensagemView.update("Negociação incluida com sucesso.");
    }
}
__decorate([
    AnalisaTempoExecucao()
], NegociacaoController.prototype, "adiciona", null);
