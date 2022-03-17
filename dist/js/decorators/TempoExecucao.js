export function AnalisaTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const MetodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retornoDoMetodo = MetodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000}`);
            retornoDoMetodo;
        };
        return descriptor;
    };
}
