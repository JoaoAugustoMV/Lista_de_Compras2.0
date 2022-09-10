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
    // throw new Error('Method not implemented.');
  }
  
  fechar(): void{
    this.dialogRef.close()
  }
  
  salvarLista(){
    const nomeLista = this.data.nomeLista
    const lista = this.data.lista // Array de Produtos

    for (let item of lista){
      // item.nomeLista = nomeLista
      for(let dado in item){
        item['nomeLista'] = nomeLista
      } 
    } // end for 
    console.log("lista = " + JSON.stringify(lista))
    console.log(lista)

    this.produtoService.adicionarLista(nomeLista, lista).subscribe((resposta) => console.log(resposta))
    this.abrirSnackBar()
    this.rotas.navigateByUrl('/')
  }

  abrirSnackBar(){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 4000,
      panelClass: 'teste'
    })
  }
}