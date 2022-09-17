import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListaDeComprasComponent } from 'src/app/pages/lista-de-compras/listaDeCompras/lista-de-compras.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-salvar-lista',
  templateUrl: './salvar-lista.component.html',
  styleUrls: ['./salvar-lista.component.css']
})
export class SalvarListaComponent implements OnInit {

  @Input() apareceSalvarLista!: boolean
  nsei = "Nao Sei"
  nomeLista!: string
    constructor(public dialogRef: MatDialogRef<ListaDeComprasComponent>, 
                @Inject(MAT_DIALOG_DATA) public data: any,
                private produtoService: ProdutoService,
                private snackBar: MatSnackBar,
                private rotas: Router) {}
  ngOnInit(): void {
      this.nomeLista = this.data.nomeLista
    
    // throw new Error('Method not implemented.');
  }
  
  fechar(): void{
    this.dialogRef.close()
  }
  
  salvarLista(){
    let listasAtuais!: string[]
    this.produtoService.retornarNomesListas().subscribe(
      {next: (listas) => {
        
        listasAtuais = listas
      }, complete: () => {

       // FOR: Para informa de qual lista o produto é 
        for (let produto of this.data.lista){ // Percorre o array de Produtos
          produto['nomeLista'] = this.nomeLista 
        }   

        if(listasAtuais.includes(this.nomeLista)){ // Se lista já existe, ou seja, metodo PUT
          this.produtoService.atualizarLista(this.nomeLista, this.data.lista).subscribe()
          
        } else { // Se a lista ainda não existe, ou seja metodo POST
            this.produtoService.adicionarLista(this.nomeLista, this.data.lista).subscribe((resposta) => {

            })
        } // end else
        this.abrirSnackBar()
        this.rotas.navigateByUrl('/')
      } // End:4

    }) // end subscribe

  } // End salvarLista

  abrirSnackBar(){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 4000,
      panelClass: 'snackBarPadrao',
      data: { mensagem : "Sua Lista foi Salva!"},

    })
  }
}