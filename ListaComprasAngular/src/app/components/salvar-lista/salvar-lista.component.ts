import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListaDeComprasComponent } from 'src/app/pages/lista-de-compras/lista-de-compras.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-salvar-lista',
  templateUrl: './salvar-lista.component.html',
  styleUrls: ['./salvar-lista.component.css']
})
export class SalvarListaComponent implements OnInit {

  @Input() apareceSalvarLista!: boolean
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

    this.produtoService.adicionarLista(this.nomeLista, this.data.lista)
    this.rotas.navigateByUrl('/')

  } // End salvarLista

  abrirSnackBar(){
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 4000,
      panelClass: 'snackBarPadrao',
      data: { mensagem : "Sua Lista foi Salva!"},

    })
  }
}