import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmarEdicaoComponent } from 'src/app/components/confirmar-edicao/confirmar-edicao.component';
import { Produto } from 'src/app/components/models/produto.class';
import { SalvarListaComponent } from 'src/app/components/salvar-lista/salvar-lista.component';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-editar-lista',
  templateUrl: './editar-lista.component.html',
  styleUrls: ['./editar-lista.component.css']
})
export class EditarListaComponent implements OnInit {

  listaProdutos: Produto[] = []
  nomeLista!: string
  rotaAtual!: string
  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private produtoService: ProdutoService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.rotaAtual = this.router.url //
    this.nomeLista = this.rotaAtual.split("/").slice(-1)[0] //

    
    this.produtoService.retornarLista(this.nomeLista).subscribe(lista => {
      this.listaProdutos = lista
    })
  }// End:2 ngOnInit

  cancelar(){
    this.router.navigateByUrl('/')
  }

  salvarEdicao(){
    console.log(this.nomeLista, this.listaProdutos)
    // this.produtoService.atualizarLista(this.nomeLista, this.listaProdutos).subscribe()
    this.abrirDialogo()
  }

  abrirDialogo(){
    const dialogRef = this.dialog.open(SalvarListaComponent,
      {
        width: '300px',
        data: {nomeLista: this.nomeLista},
        disableClose: true,
        autoFocus: true,
        hasBackdrop: true
      })
  }

} // End:1
