import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.class';
import { SalvarListaComponent } from 'src/app/components/salvar-lista/salvar-lista.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { JanelaModalComponent } from 'src/app/components/janela-modal/janela-modal.component';



@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent implements OnInit {
  listaProdutos: Array<Produto> = []
  rotaAtual!: string
  nomeLista!: string

  constructor(private dialog: MatDialog,
              private router: Router,
              private produtoService: ProdutoService) { 

  }

  ngOnInit(): void {
    this.rotaAtual = this.router.url //
    this.nomeLista = this.rotaAtual.split("/").slice(-1)[0] //

    this.produtoService.retornarLista(this.nomeLista).subscribe({ 
      next:
        lista => {
    
          this.listaProdutos = lista
      }, complete:  () => {

      }
    }) // end subs
  } // end OnInit
  

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
    this.abrirDialogSalvar()
  }

  cancelar(){
    this.router.navigateByUrl('/')
  }

  // Abrir janela para Salvar Lista
  abrirDialogSalvar(): void {
    const dialogRef = this.dialog.open(SalvarListaComponent, {
      width: '300px',
      data: {nomeLista: this.nomeLista, lista: this.listaProdutos},
      disableClose: true,
      autoFocus: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {

      // this.animal = result;
    });
  }

  removerProduto(novaLista: Produto[]){ // recebe a lista da tabelaComponent com os produtos já removidos
    console.log("testse", novaLista)
    this.listaProdutos = novaLista // Apenas atribui a lista da tabelaComponent a lista deste component
  }

  removerTodosProdutos(){
    this.listaProdutos = []
  }

  abrirDialogRemoverTodos(){
    const dialogRef = this.dialog.open(JanelaModalComponent,{
      width: '350px',
      data: {mensagem: "Tem certeza que deseja remover todos os produtos?"},
      disableClose: false,
      hasBackdrop: true
    })
    this.eventoConfirmarRemocao(dialogRef)
  }

  eventoConfirmarRemocao(dialogRef: MatDialogRef<JanelaModalComponent>){
    dialogRef.componentInstance.eventConfirmar.subscribe(() =>{
      this.removerTodosProdutos()
      dialogRef.close()
    })
  }
  

}

