import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  findAll():Observable<Produto[]>{
    const url = `${this.baseUrl}/produto`
    return this.http.get<Produto[]>(url)
  }
  
  findProdutoPage(page: number, size: number):Observable<any>{
    const url = `${this.baseUrl}/produto?page=${page}&size=${size}`
    return this.http.get(url);
  }

  create(produto: Produto): Observable<Produto>{
    const url = `${this.baseUrl}/produto`
    return this.http.post<Produto>(url, produto);
  }

  findById(id: string): Observable<Produto> {
    const url = `${this.baseUrl}/produto/${id}`
    return this.http.get<Produto>(url);
  }

  deleteProduto(id: string): Observable<void> {
    const url = `${this.baseUrl}/produto/${id}`
    return this.http.delete<void>(url);
  }

  update(produto: Produto):Observable<void> {
    const url = `${this.baseUrl}/produto/${produto.id}`
    return this.http.put<void>(url, produto)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}