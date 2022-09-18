import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.class';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-modo-mercado',
  templateUrl: './modo-mercado.component.html',
  styleUrls: ['./modo-mercado.component.css']
})
export class ModoMercadoComponent implements OnInit {
  rotaAtual!: string
  nomeLista!: string
  listaProdutos!: Produto[]
  constructor(private router: Router, private produtoService: ProdutoService) { }

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
  }

  removerProduto(novaLista: Produto[]){
    this.listaProdutos = novaLista
  }

}
