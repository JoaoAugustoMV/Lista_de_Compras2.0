export class Produto{
    total: number;
    constructor(
    public nome: string,
    public preco: number,
    public quantidade: number,
    public nomeLista?: string,
    ){ 
        this.total = preco * quantidade
    }
}