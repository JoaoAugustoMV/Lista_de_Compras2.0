import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProdutoService } from 'src/app/services/produto.service';
import { ListaIconeComponent } from '../../pages/listas-salvas/lista-icone/lista-icone.component';
import { Descricao } from '../../models/descricao.class';

@Component({
  selector: 'app-janela-modal',
  templateUrl: './janela-modal.component.html',
  styleUrls: ['./janela-modal.component.css']
})
export class JanelaModalComponent implements OnInit {

  @Output() eventConfirmar = new EventEmitter<boolean>()
  constructor(public dialogRef: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  fechar(): void{
    this.dialogRef.closeAll()
  }

  confirmar(): void{
    this.eventConfirmar.emit(true)
  }

}
