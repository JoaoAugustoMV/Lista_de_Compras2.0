import { Component, Input, OnInit} from '@angular/core';
import { Produto } from 'src/app/components/models/produto.class';

import * as $ from 'jquery';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  colunasExibidas = [
    'nome',
    'preco',
    'quantidade',
    'total'
  ]
  @Input() listaProdutos: Array<Produto> = []
  @Input() nProdutos!: number
  
  dataSource!: MatTableDataSource<Produto>
  constructor() { }

  ngOnInit(): void {
    this.atualizarTotalFinal()
  }
  ngOnChanges(): void{
    this.atualizarTotalFinal()
    console.log(this.listaProdutos)
    this.dataSource = new MatTableDataSource(this.listaProdutos)
    
  }

  // Atualiza tanto o total do produto na celula total, quanto na lista de Produtos
  atualizarProduto(produtoAlterado: Produto):void{
    console.log(produtoAlterado)
    let novoPrecoProduto = Number($(`.${produtoAlterado.nome}Preco`).val()) 
    let novaQuantidadeProduto = Number($(`.${produtoAlterado.nome}Quantidade`).val())
   
    produtoAlterado.total = novoPrecoProduto * novaQuantidadeProduto // Atualiza a celula total do produto

    this.listaProdutos.forEach( (produto: Produto) =>{ // Atualiza a lista
      if(produto.nome === produtoAlterado.nome){
        produto.preco = novoPrecoProduto
        produto.quantidade = novaQuantidadeProduto
        produto.total = produto.preco * produto.quantidade
      }
    }) // end forEach
    console.log(this.listaProdutos)
    this.dataSource = new MatTableDataSource(this.listaProdutos)

    this.atualizarTotalFinal()
  } // end atualizaProduto

  atualizarTotalFinal(): void {
    let soma = 0
    for(let produto of this.listaProdutos) { 
      soma += produto.total
    }
    $('#TotalFinal').text(soma.toString())
  }
   


}


