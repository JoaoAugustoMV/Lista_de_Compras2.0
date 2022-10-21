import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Produto } from 'src/app/models/produto.class';

import * as $ from 'jquery';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JanelaModalComponent } from 'src/app/components/janela-modal/janela-modal.component';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

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
  @Input() listaProdutosTabela: Array<Produto> = []
  @Input() nProdutos!: number // Monitora a adiçao ou remoção de produtos da lista

  @Output() eventRemoverProduto = new EventEmitter<Produto[]>()
  
  dataSource!: MatTableDataSource<Produto>

  listaCheck: Produto[] = [] // Produtos Riscados
  
  constructor(private dialog: MatDialog, private router: Router) { }
  
  ngOnInit(): void {
  
    // this.verificarRotaMercado()
  }
  ngOnChanges(): void{

    // this.verificarRotaMercado()
    this.calcularTotal(this.listaProdutosTabela)
    this.dataSource = new MatTableDataSource(this.listaProdutosTabela)
	
    
  }


  calcularTotal(lista: Produto[]): number{
   let total = 0
    for(let produto in lista){
      total += lista[produto].total
   }

   return total
  }

  atualizarCheck(produtoAlterado: Produto){ // Monitora o clique no check
    
    if(this.listaCheck.includes(produtoAlterado)){ // Se o item estiver checkado, apos o clique devera estar uncheck
		this.listaCheck = this.listaCheck.filter(produto => produto.nome != produtoAlterado.nome)
    } else{ // Se o item estiver uncheck, apos o clique devera ficar check
      this.listaCheck.push(produtoAlterado) 
    }

  } // End atualizarCheck

  // Atualiza tanto o total do produto na celula total, quanto na lista de Produtos
  atualizarProduto(produtoAlterado: Produto):void{
    
    // Se o nome do produto tiver espaço, será adicionado mais de uma classe ex: leite condensado teria as classes: leite condensadoPreco
    // Para garantir apenas uma classe é removido os espaços 
    let novoPrecoProduto = Number($(`.${produtoAlterado.nome}Preco`.replaceAll(' ', '')).val()) 
    let novaQuantidadeProduto = Number($(`.${produtoAlterado.nome}Quantidade`.replaceAll(' ', '')).val())
   
    produtoAlterado.total = novoPrecoProduto * novaQuantidadeProduto // Atualiza a celula total do produto

    this.listaProdutosTabela.forEach( (produto: Produto) =>{ // Atualiza a lista
      if(produto.nome === produtoAlterado.nome){
        produto.preco = novoPrecoProduto
        produto.quantidade = novaQuantidadeProduto
        produto.total = produto.preco * produto.quantidade
      }
    }) // end forEach
    
    this.dataSource = new MatTableDataSource(this.listaProdutosTabela)


  } // end atualizaProduto


  cliqueRemoverProduto(produtoParaRemover: Produto){
    this.abrirDialog(produtoParaRemover)
    
    
  }
  
  abrirDialog(produto: Produto){
    const dialogRef = this.dialog.open(JanelaModalComponent, {
      width: '350px',
      data: {mensagem: `Tem certeza que deseja remover ${produto.nome}?`}, // Dados que irão para o component
      disableClose: false,
      hasBackdrop: true
    })
    this.eventoConfirmar(dialogRef, produto); // Monitora o clique na JanelaModalComponent
  }
  
  eventoConfirmar(dialogRef: MatDialogRef<JanelaModalComponent>, produtoParaRemover: Produto){
    dialogRef.componentInstance.eventConfirmar.subscribe((teste) => { // Ao clicar em Confirmar na JanelaModalComponent
      this.removerProduto(produtoParaRemover)
      dialogRef.close()
    })

  }

  removerProduto(produtoParaRemover: Produto){
    this.listaProdutosTabela = this.listaProdutosTabela.filter((produto) => produto.nome !== produtoParaRemover.nome)
    const novaLista = this.listaProdutosTabela
    
    
    this.eventRemoverProduto.emit(novaLista)
  }
   
  verificarRotaMercado(){
    if(this.router.url.includes('modoMercado')){
      return true
    } 
    return false
  }


}


