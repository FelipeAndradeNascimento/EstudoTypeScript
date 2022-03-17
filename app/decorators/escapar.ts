export function escape(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
){
	const metodoOriginal = descriptor.value;
	descriptor.value = function(...args: any[]){
        console.log('Função escape funcionando');
		let retorno = metodoOriginal.apply(this, args);
		if(typeof retorno === 'string'){
			retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')
		}
		return retorno;
	}
}