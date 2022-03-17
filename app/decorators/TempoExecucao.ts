export function AnalisaTempoExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){ 
        const MetodoOriginal = descriptor.value;    //Server para manter o metodo original que esta no descriptor
        descriptor.value = function(...args:Array<any>){
            const t1 = performance.now();
            const retornoDoMetodo = MetodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000}`);
            retornoDoMetodo
        }
        return descriptor; 
    }    
}