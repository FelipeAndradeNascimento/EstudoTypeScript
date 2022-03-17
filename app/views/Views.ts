import { InformacoesMetodo } from "../decorators/Inspect.js";

/* 
Como a Views é uma classe Pai, que contêm as funcionalidades que as classes Filhas vão implementar
é necessário que a mesma seja tipada com GENERICs <T> 
desta forma as classes Filhas que contém regras distintas de negocio, podem trabalhar com seus tipos 
aproveitando a infra estrutura que a classe Pai fornece;
Como é uma classe que não deve ser instanciada, colocamos ABSTRACT, para que ela sempre seja usada pelas filhas
mas jamais instanciada no modulo central.
Para garantir que o programador deve sempre fazer a implementação nas classes Filhas.
*/

export abstract class Views<T>{

    //O modificador protected diz que só a própria classe, 
    //ou as filhas que herdarem desta classe, podem ter acesso à propriedade protected
    protected _elementoHtml : HTMLElement;
    //Construtor recebe qual componente do DOM, vai receber o template
    constructor(seletor:string){
        this._elementoHtml = document.querySelector(seletor) as HTMLInputElement;
    }

    /*
	tratamento de erro
	template(modelTexto:T):string {
        throw new Error("Classe filha deve implementar template.");
    }
    ou seja, não preciso da implementação na classe Pai, so preciso da referencia aqui; 
    para que a implementação seja realizada na classe Filha
    */
    //abstract template(model : T):string; essa implementação é valida 
    //mas como não usamos esse metodo externamente, não ha necessidade de exibir o mesmo 
    //na controller ja que somente o metodo update precisa acesssar o metodo Template
    //o uso do protected, deixa a metodo visivel somente para a classe Pai e classes Filhas
    protected abstract template(model:T):string;

    @InformacoesMetodo()
    update(model:T): void{
        this._elementoHtml.innerHTML = this.template(model);
    }
}