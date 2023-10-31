import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../../../model/page.model';
import { Usuario } from '../../../model/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  private page!: Page;
  pageEvent!: PageEvent;

  displayedColumns: string[] = ['username', 'email', 'roles', 'acoes'];

  constructor(
    private service: UsuarioService,
    private router: Router)
    {}

  ngOnInit(): void {
    //this.findAll();
    this.pageUsuarios(0, 5);
  }
  pageUsuarios(page: number, size: number){
    this.service.findUsuarioPage(page, size).subscribe(resposta => {
      this.page = resposta;
      this.usuarios = this.page.content;
    })
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page;
    this.service.findUsuarioPage(page, size).subscribe(resposta =>{
      this.page = resposta;
      this.usuarios = this.page.content;
    });
  }

  /*findAll() {
    this.service.findAll().subscribe(res => {
      this.usuarios = res;
    })
  }*/

  navegarParaCategoriaCreate() {
    this.router.navigate(["usuario/create"])
  }

}