import { Component, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { Descricao } from 'src/app/models/descricao.class';
import { Produto } from 'src/app/models/produto.class';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listas-salvas',
  templateUrl: './listas-salvas.component.html',
  styleUrls: ['./listas-salvas.component.css']
})
export class ListasSalvasComponent implements OnInit, OnChanges {
  
  @Input() descricoes: Descricao[] = [] // nomes das listas e seu total respectivo

  constructor(private produtoService: ProdutoService, ) {
  }
  
  ngOnInit(): void {
    this.receberTodasListas()
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('OnChanges');
  }

 
  // Consulta o banco de dados com todas listas e adiciona no array descricoes
  receberTodasListas(): void{
    
    this.produtoService.retornarTodasListas().subscribe({
      next:listas => {
        this.descricoes =  []

        let nomesDasListas = Object.keys(listas); // Array dos nomes da Listas
  
        for(let nomeLista of nomesDasListas){ // Itera as listas

          this.descreverLista(listas[nomeLista], nomeLista) // Calcula o total final da lista e add no descricoes
    
        }   
        
      } // end observer(parametro de subs)
    }) // end subs
    
  } // End receberNomesListas

  
  descreverLista(lista: Array<Produto>, nomeLista: string){
    let totalFinal: number = 0
  
    for(let p in lista){
      totalFinal += lista[p]['total']
    }
    let descricao = new Descricao(nomeLista, totalFinal)
    
    this.descricoes.push(descricao)
  }

  // Monitora o evento do componente filho(quando uma lista é excluida)
  atualizarDescricoes(nomeLista: string){ // Retira do array descricoes a lista excluida
        
    let descricoesRestantes = this.descricoes.filter((lista => {
      if(lista.nomeLista != nomeLista){
        return lista
      }
      else{
        return false
      }
    })) // end filter
     
    this.descricoes = descricoesRestantes

  }
} // end component
