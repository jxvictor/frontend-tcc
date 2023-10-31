import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {
  usuario: Usuario = {}

  constructor(
    private http: HttpClient,
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.username = resposta.username;
      //this.usuario = resposta;
      //this.usuario.modelo = resposta.modelo;
      console.log(this.usuario);
    })
  }

  delete(): void {
    this.service.deleteUsuario(this.usuario.id!).subscribe(() => {
      this.router.navigate(['usuario'])
      this.service.mensagem('Usuário deletado com sucesso!')
      console.log('Usuário deletado com sucesso!');
    }, error => {
      console.error(error)
    });
  }

  cancel(): void {
    this.router.navigate(['usuario'])
    this.service.mensagem('Você cancelou a remoção de um usuário!');
  }

}