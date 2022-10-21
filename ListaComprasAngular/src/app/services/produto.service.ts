import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.class';
import { Observable } from 'rxjs';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  private url = 'http://localhost:8080/api/listas/'
  private urlProdutos = 'http://localhost:8080/produtos/'
  constructor(private fireDB: AngularFireDatabase) {

  }


  // GET: Retornar todas as lista
  retornarTodasListas(): Observable<any>{
    return this.fireDB.object<string[]>('/').valueChanges()
  }


  // GET By: Retorna a lista especifica
  retornarLista(nomeLista: string): Observable<any>{
    
    let fireObject = this.fireDB.object<Produto[]>(nomeLista)
    return fireObject.valueChanges()

  }

  //POST: Adicionar nova Lista
  adicionarLista(nomeLista: string, produtos: Produto[]): void{ //  
    
    let fireObject = this.fireDB.object<Object>(nomeLista)

    produtos.forEach((produto) => {
      
      fireObject.update({[produto.nome]: produto})
    })

  }

  // // PUT: Atualizar lista
  // atualizarLista(nomeLista: string,  produtos: Produto[]):  {
  // }

  
  // DELETE: Deletar a lista especifica
  deletarLista(nomeLista: string): void{

    let fireObject = this.fireDB.object(`/${nomeLista}`)
    
    fireObject.remove()

  } // 


} // end Service

