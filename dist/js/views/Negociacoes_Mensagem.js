import { Views } from "./Views.js";
export class Negociacoes_Mensagens extends Views {
    template(modelTexto) {
        return `
            <p class="alert alert-info">${modelTexto}</p>
        `;
    }
}
