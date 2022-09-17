import { Component, OnChanges, OnInit, } from '@angular/core';
import { Descricao } from 'src/app/models/descricao.class';
import { ListaIconeService } from 'src/app/services/lista-icone.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listas-salvas',
  templateUrl: './listas-salvas.component.html',
  styleUrls: ['./listas-salvas.component.css']
})
export class ListasSalvasComponent implements OnInit, OnChanges {

  todasListas: string[] = [] // Apenas os nomes
  descricoes: Descricao[] = [] // nomes das listas e seu total respectivo
  constructor(private produtoService: ProdutoService, ) {
  }
  
  ngOnInit(): void {
    this.receberNomesListas()
    
  }
  ngOnChanges(){
    this.receberNomesListas()
  }

  atualizarDescricoes(nomeLista: string){

    let descricoesRestantes = this.descricoes.filter((lista => {
      if(lista.nomeLista != nomeLista){
        return lista
      }
      else{
        return false
      }
    }))
    this.descricoes = descricoesRestantes
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

  } // end descreverLista()
} // end component
