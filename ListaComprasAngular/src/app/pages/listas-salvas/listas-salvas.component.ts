import { Component, OnInit, } from '@angular/core';
import { Descricao } from 'src/app/components/models/descricao.class';
import { ListaIconeService } from 'src/app/services/lista-icone.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listas-salvas',
  templateUrl: './listas-salvas.component.html',
  styleUrls: ['./listas-salvas.component.css']
})
export class ListasSalvasComponent implements OnInit {

  todasListas: string[] = [] // Apenas os nomes
  descricoes: Descricao[] = [] // nomes das listas e seu total respectivo
  constructor(private produtoService: ProdutoService, ) {
  }
  
  ngOnInit(): void {
    this.receberNomesListas()
    
  }

  // Retornar apenas os nomes da lista
  receberNomesListas(): void{
    this.produtoService.retornarNomesListas().subscribe({
      next: nomeLista => {     
        this.todasListas = nomeLista     // Array dos nomes   
      }, // end next 

      complete: () => { // 
        for(let nomeLista of this.todasListas){
          this.descreverLista(nomeLista)
        } // end complete
      }
    }) // end subscribe
    
  } // End receberNomesListas


  // Retorne o nomeLista e o total final da lista
  descreverLista(nomeLista: string): void{ 

    let totalFinal = 0
    this.produtoService.retornarLista(nomeLista).subscribe({
      next: lista => {
        lista.forEach((produto) => {
          totalFinal += produto.total
        }) // end forEach
        
    }, 
      complete: () => { // Só é adicionada APOS a Promisse ser cumprida,
        this.descricoes.push( new Descricao(nomeLista, totalFinal)) // 
      }}) // end subscribe
      // console.log('after subs',  nomeLista, totalFinal)
  } // end descreverLista()
} // end component
