import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {}
  //usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.usuario).subscribe((resposta: any) => {
      console.log(resposta);
      this.router.navigate(['usuario'])
      this.service.mensagem('Usuário criado com sucesso!');
    }, (error: any) => {
      console.log(error);
    })
  }

  cancel(): void {
    this.router.navigate(['usuario'])
    this.service.mensagem('Você cancelou a criação de um novo usuário!');
  }

}