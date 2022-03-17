export class Negociacao {
    /* /metodos comum usado em Java e C# 
    declarando variaveis privadas a classe, 
    que serão inicializdas no construtor
    O typeSript tem um mecanismo que permite avaliar em 90% as chances de que os parametros
    informados no construtor são valores privados da classe , sendo assim dispensando a necessidade
    de declarar variaveis privadas na classe 
    private _data:Date;
    private _quantidade:number;
    private _valor:number;
    
    Com essa funcionalidade é possivel escrever menos e ainda ter a liberdade de gerar variaveis
    privadas que não precisam ser usadas no construtor, se for o caso de alguma particularidade da classe
    */

    //Construtor para receber valores da classe
    //Observação, ao gerar um construtor dessa forma, as variaveis : Data, Quantidade e Valor,
    //so recebem atribuição via construtor e não podem ser modificadas ao longo do uso no sistema.
    constructor(private _varData: Date, private _varQuantidade: number, private _varValor: number){}

    //Getters para retornar valores das variaveis privadas
    get data():Date { return this._varData; }
    get quantidade() : number{ return this._varQuantidade; }
    get valor() : number{ return this._varValor; }
    get volume() : number{ return this._varQuantidade * this._varValor; }

    //Montagem de metodo da classe, dessa forma é possivel invocar o metodo, sem precisar
    //gerar uma instancia da classe (quando esse tipo de abordagem for necessária)
    public static _CriarNegociocao(parmData:string, parmQtd:string, parmValor:string) : Negociacao{
        const expRegular = /-/g;
        const auxData = new Date(parmData.replace(expRegular, ','));
        const auxQtd = parseInt(parmQtd);
        const auxVlr = parseFloat(parmValor);

        return new Negociacao(auxData, auxQtd, auxVlr);
    }
}