export class Produto{
    total: number;
    constructor(
    public nome: string,
    public preco: number,
    public quantidade: number
    ){ 
        this.total = preco * quantidade
    }
}