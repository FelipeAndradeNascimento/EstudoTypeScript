/*odulo Principal que vai rodar todas as regras de negociação do sistema
import { Negociacao } from "./models/negociacao.js";       //Importando a instancia da classe

const objLocalNegociacao = new Negociacao(new Date(),10, 100);
console.log(objLocalNegociacao.data);
console.log(objLocalNegociacao.quantidade);
console.log(objLocalNegociacao.valor);
console.log('volume:' + objLocalNegociacao.volume);*/

import { NegociacaoController } from "./controllers/negociacaoController.js";

const objController = new NegociacaoController();
const objForm = document.querySelector('.form');
objForm.addEventListener('submit',
    event => { 
        event.preventDefault();
        objController.adiciona(); 
    }
 );