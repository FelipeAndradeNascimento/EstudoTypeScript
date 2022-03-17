import { NegociacaoController } from "./controllers/negociacaoController.js";
const objNEgociacaoController = new NegociacaoController();
const objForm = document.querySelector('.form');
if (objForm) {
    objForm.addEventListener('submit', event => {
        event.preventDefault();
        objNEgociacaoController.adiciona();
    });
    objForm.addEventListener('#btnLimpar', event => {
        event.preventDefault();
        objNEgociacaoController.limparFormulario();
    });
}
else {
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o Form carregou');
}
