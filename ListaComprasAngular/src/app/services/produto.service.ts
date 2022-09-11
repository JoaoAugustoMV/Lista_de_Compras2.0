import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../components/models/produto.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
  private url = 'http://localhost:8080/api/listas/'
  private urlProdutos = 'http://localhost:8080/produtos/'
  constructor(private httpClient: HttpClient) {

  }


  // GET: Retornar os nomes das lista
  retornarNomesListas(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.url)
  }

  // GET By nomeLista: Filtra a tabela pela coluna nome_lista
  retornarLista(nomeLista: string): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url + nomeLista);
  }

  //POST: Adicionar nova Lista
  adicionarLista(nomeLista: string, produtos: Produto[]): Observable<Produto[]>{ //  
    const url = this.url + nomeLista
    console.log("url", url)
    console.log("nomeLista", nomeLista)
    console.log("produtos", produtos)

    return this.httpClient.post<Produto[]>(url, produtos)
  }

  // PUT: Atualizar lista
  atualizarLista(nomeLista: string,  produtos: Produto[]): Observable<Produto[]>{
	console.log(this.url + nomeLista)
    return this.httpClient.put<Produto[]>((this.url + nomeLista), produtos)
  }
  
  // DELETE: Apagar todas ocorrencias de nomeLista
  deletarLista(nomeLista: string): Observable<Produto[]>{
    return this.httpClient.delete<Produto[]>(this.url + nomeLista)
  }

    


}

