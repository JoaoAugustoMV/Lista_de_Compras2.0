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

  // GET
  retornarTodos(){
    this.httpClient.get(this.url).subscribe(resposta => console.log(resposta))
  }
  
  // 
  retornarNomesListas(): Observable<string[]>{
    return this.httpClient.get<string[]>(this.url)
  }

  // Get By nomeLista

  retornarLista(nomeLista: string): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url + nomeLista);
  }
  //POST
  adicionarLista(nomeLista: string, produtos: Produto[]): Observable<Produto[]>{ //  
    const url = this.url + nomeLista
    console.log("url", url)
    console.log("nomeLista", nomeLista)
    console.log("produtos", produtos)

    
    return this.httpClient.post<Produto[]>(url, produtos)
  }
    // post Lista: nomeLista, quant, totalLista
    // post Produtos: nome, preco, quant, total


}

