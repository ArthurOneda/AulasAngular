import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = "http://localhost:3000/products"
  constructor(private httpClient:HttpClient) { }
  getAllProdutos():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.url)
  }
  deleteProduto(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
  addProduto(produto:Produto):Observable<Produto>{
    return this.httpClient.post<Produto>(this.url, produto)
  }
  updateProduto(id:string, produto:Produto):Observable<Produto>{
    return this.httpClient.put<Produto>(`${this.url}/${id}`, produto)
  }
}
