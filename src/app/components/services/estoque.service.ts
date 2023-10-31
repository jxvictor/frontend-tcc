import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Estoque } from '../model/estoque.model';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  
  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  findEstoquePage(page: number, size: number):Observable<any>{
    const url = `${this.baseUrl}/estoque`
    return this.http.get(url + `?page=${page}&size=${size}`);
  }

  create(estoque: Estoque): Observable<Estoque>{
    const url = `${this.baseUrl}/estoque/saida`
    return this.http.post<Estoque>(url, estoque);
  }

  createEntrada(estoque: Estoque): Observable<Estoque>{
    const url = `${this.baseUrl}/estoque/entrada`
    return this.http.post<Estoque>(url, estoque);
  }

  findById(id: string): Observable<Estoque> {
    const url = `${this.baseUrl}/estoque/${id}`
    return this.http.get<Estoque>(url);
  }

  deleteEstoque(id: string): Observable<void> {
    const url = `${this.baseUrl}/estoque/${id}`
    return this.http.delete<void>(url);
  }

  update(estoque: Estoque):Observable<void> {
    const url = `${this.baseUrl}/estoque/${estoque.id}`
    return this.http.put<void>(url, estoque)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}