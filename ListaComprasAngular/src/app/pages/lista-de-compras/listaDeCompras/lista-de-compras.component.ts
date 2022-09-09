import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/components/models/produto.class';
import { SalvarListaComponent } from 'src/app/components/salvar-lista/salvar-lista.component';
import { ProdutoService } from 'src/app/services/produto.service';



@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent implements OnInit {
  listaProdutos: Array<Produto> = []

  constructor(private dialog: MatDialog) { 

  }

  ngOnInit(): void {
  }
  

  adicionarProduto(inputNome: HTMLInputElement, inputPreco: HTMLInputElement, inputQuantidade: HTMLInputElement){
    let nome = inputNome.value // Infere string
    let preco = Number(inputPreco.value)
    let quantidade = Number(inputQuantidade.value)
    
    let produto = new Produto(nome, preco, quantidade)

    this.listaProdutos.push(produto)
    
    
    // Limpar Campos
    for(let input of arguments){
      input.value = ''
    }
    inputNome.focus()

  } // end addProduto
  salvarLista(): void{  
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SalvarListaComponent, {
      width: '300px',
      data: {lista: this.listaProdutos},
      disableClose: true,
      autoFocus: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  

}

