import { escapeLeadingUnderscores } from "../../node_modules/typescript/lib/typescript.js";
import { escape } from "../decorators/escapar.js";
import { clslstNegociacoes } from "../models/listaNegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { Views } from "./Views.js";

export class NegociacoesView extends Views<clslstNegociacoes> {

    @escape
    protected template(dadoslistagem:clslstNegociacoes) : string {
        return `<table class="table table-hover table-bordered">
            <thead>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
            </thead>
            <tbody>
                ${dadoslistagem.listar().map( negociacao => {
                    return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>`
    }

    //função para formatar data, de acordo com localidade e padrão territorial
    //ter essa função, ajuda para reduzir codigos dentro do template.
    private formatarData(param_data : Date):string {
        return Intl.DateTimeFormat().format(param_data);
    }
        /*
    //Serve para renderizar o template dentro do elemento privado desta classe
    // inicializado e indicado via construtor
    update(modelListagem:clslstNegociacoes) : void {
        this._elementoHtml.innerHTML = this.template(modelListagem);
    }
    NÃO PRECISO IMPLEMENTAR POIS JA É USADO GENERICAMENTE PELA CLASSE PAI QUE NOS HERDAMOS
    */
}