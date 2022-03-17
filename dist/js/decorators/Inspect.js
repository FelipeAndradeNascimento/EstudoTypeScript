export function InformacoesMetodo() {
    return function (target, propertyKey, descriptor) {
        const MetodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`--- parâmtro: ${JSON.stringify(args)}`);
            const retorno = MetodoOriginal.apply(this, args);
            console.log(`----- retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
