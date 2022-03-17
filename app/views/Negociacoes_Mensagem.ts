import { Views } from "./Views.js";

export class Negociacoes_Mensagens extends Views<string>{
    
    protected template(modelTexto:string):string {
        return `
            <p class="alert alert-info">${modelTexto}</p>
        `;
    }

    /* com o metodo update sera implementado em toda regar de negocio, é possivel torna-lo GENERICO
    assim a classe PAI, Views, pode ter ele para assumir a disponibilidade do metodo para o sistema
    e cabe a filha fazer a chamada com a tipagem necessária
    update(modelMensagem:string): void{
        this._elementoHtml.innerHTML = this.template(modelMensagem);
    }*/

}