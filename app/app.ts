//Modulo Principal que vai rodar todas as chamadas do sistema

//Importando a instancia da classe
import { NegociacaoController } from "./controllers/negociacaoController.js";
import { NegociacoesView } from "./views/Negociacoes_View.js";

const objNEgociacaoController = new NegociacaoController();
const objForm = document.querySelector('.form');

//ATRIBUIÇÕES DE EVENTOS/METODOS A OBJETOS DA TELA
if(objForm){
    objForm.addEventListener('submit',
        event => { 
            event.preventDefault();
            objNEgociacaoController.adiciona(); 
        }
    );

    objForm.addEventListener('#btnLimpar',
    event => {
        event.preventDefault();
        objNEgociacaoController.limparFormulario();
    }
 );
}
else{
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o Form carregou');
}