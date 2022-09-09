import { Component, OnInit } from '@angular/core';
import { ListaIconeService } from 'src/app/services/lista-icone.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listas-salvas',
  templateUrl: './listas-salvas.component.html',
  styleUrls: ['./listas-salvas.component.css']
})
export class ListasSalvasComponent implements OnInit {

  todasListas: String[] = []
  constructor(private produtoService: ProdutoService, ) {
  }
  
  ngOnInit(): void {
    this.receberNomesListas()
  }

  receberNomesListas(): void{
    this.produtoService.retornarNomesListas().subscribe({
      next: nomeLista => {     
        this.todasListas = nomeLista        
    }, 
      complete: () => { }
  })

  } // End receberNomesListas

  descreverLista(nomeLista: String): void{
    console.log("Lista", nomeLista)
    this.produtoService.retornarLista(nomeLista).subscribe(resposta => {
      console.log(resposta)
    })
  }
}
