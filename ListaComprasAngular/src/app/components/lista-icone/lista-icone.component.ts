import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListaDeComprasComponent } from 'src/app/pages/lista-de-compras/listaDeCompras/lista-de-compras.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { JanelaModalComponent } from '../janela-modal/janela-modal.component';
import { Descricao } from '../models/descricao.class';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-lista-icone',
  templateUrl: './lista-icone.component.html',
  styleUrls: ['./lista-icone.component.css']
})
export class ListaIconeComponent implements OnInit{

  
  @Input() nDescricoes!: number
  @Input() descricao!: Descricao

  
  @Output() eventDescricoes = new EventEmitter<string>()

  constructor(private produtoService: ProdutoService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router) { 

    // this.matIconRegistry.addSvgIcon('iconeDeletar', 
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/icons8-trash-150.svg'))
  }

  ngOnInit(): void {

  }

  editarLista(){
    const urlEditar = "editarLista/"
    // console.log(urlEditar + this.descricao.nomeLista)
    this.router.navigateByUrl(urlEditar + this.descricao.nomeLista)
    
  }
  // Abrir MatDialogo
  abrirDialog(){
    const dialogRef = this.dialog.open(JanelaModalComponent, {
      width: '300px',
      data: this.descricao,
      disableClose: false,
      hasBackdrop: true
    })
    this.eventoConfirmar(dialogRef);
  }
  
  // Monitora o eventConfirmar(clique em Confirmar na Janela)
  eventoConfirmar(dialogRef: MatDialogRef<JanelaModalComponent>) {
    dialogRef.componentInstance.eventConfirmar.subscribe(teste => { // subscribe ao apertar 
      this.deletarLista()
      dialogRef.close() // Fechar Janela
      this.snackBar.openFromComponent(SnackBarComponent, // Snack Bar para informar qual lista foi deletada
        {
          duration: 4000,
          panelClass: 'snackBarPadrao', // Classe CSS
          data: { mensagem: `A lista ${this.descricao.nomeLista} foi apagada` }
        } 
        ); // End:4 eventoConfirmar()
      }); // End:3 subscribe()
    } // End:2 eventoConfirmar()
    
    // DELETE Lista
    deletarLista(){
      this.produtoService.deletarLista(this.descricao.nomeLista).subscribe()
      this.eventDescricoes.emit(this.descricao.nomeLista) // Emite para o Componente Pai a mudança
      
    }
} // End:1 componente

