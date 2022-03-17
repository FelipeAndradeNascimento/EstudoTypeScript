import { Negociacao } from "./negociacao.js";

export class clslstNegociacoes{
    //Geralmente declaramos listas tipadas seguindo a sintaxe abaixo
    //private lstnegociacoes: Array<Negociacao> = [];     //lista privada para guardar negociações
    ///o TypeScript, oferece uma atalho para não se perder a tipagem e escrever menos, vide exemplo abaixo:
    private lstnegociacoes: Negociacao[] = [];
    
    //METODOS PARA MANIPULAR A LISTAGEM
    //adiciona novo item na lista de negociações
    adicionar(novaNegociacao:Negociacao){
        this.lstnegociacoes.push(novaNegociacao);
    }

    //lista negociações existentes
    //Observação: colocar ReadOnly para que a listagem não possa ser manipulada
    listar() : ReadonlyArray <Negociacao>{
        return this.lstnegociacoes;
    }

}