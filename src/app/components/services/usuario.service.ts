import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../model/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private _snack: MatSnackBar) { }

  /*findAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.endpoint)
  }*/
  findUsuarioPage(page: number, size: number):Observable<any>{
    const url = `${this.baseUrl}/usuario?page=${page}&size=${size}`
    return this.http.get(url);
  }

  create(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/auth/register`
    return this.http.post<Usuario>(url, usuario);
  }

  findById(id: string): Observable<Usuario> {
    const url = `${this.baseUrl}/usuario/${id}`
    return this.http.get<Usuario>(url);
  }

  deleteUsuario(id: string): Observable<void> {
    const url = `${this.baseUrl}/usuario/${id}`
    return this.http.delete<void>(url);
  }

  update(usuario: Usuario):Observable<void> {
    const url = `${this.baseUrl}/usuario/${usuario.id}`
    return this.http.put<void>(url, usuario)
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

  getPublicContent(): Observable<any> {
    const url = `${this.baseUrl}/test/all`
    return this.http.get(url, { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    const url = `${this.baseUrl}/test/user`
    return this.http.get(url, { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    const url = `${this.baseUrl}/test/mod`
    return this.http.get(url, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    const url = `${this.baseUrl}/test/admin`
    return this.http.get(url, { responseType: 'text' });
  }

}