import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { Role } from '../../../model/role.model';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  usuario: Usuario = {}
  //roles: Role[] = []; // Adicione uma propriedade para as funções
  roles: Role[] = [
    { id: '1', nome: 'ROLE_USER' },
    { id: '2', nome: 'ROLE_ADMIN' },
    { id: '3', nome: 'ROLE_MODERATOR' }
  ];
  selectedRoles: Role[] = [];

  
  // No seu componente.ts
  //rolesList: string[] = ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_MODERATOR'];


  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.username = resposta.username;
      this.usuario.email = resposta.email;
      this.usuario.password = resposta.password;
      this.usuario.roles = resposta.roles;
    });
  }

  update(): void {
    this.service.update(this.usuario).subscribe((resposta) => {
      this.router.navigate(["usuario"]);
      this.service.mensagem("Usuário atualizado com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['usuario'])
  }
}
