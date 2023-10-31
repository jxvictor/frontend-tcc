import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { LoginRequestComponent } from './components/views/login/login-request/login-request.component';
import { UsuarioNaoAutenticadoGuard } from './components/views/guard/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './components/views/guard/usuario-autenticado.guard';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/template/principal/principal.component';
import { EstoqueReadComponent } from './components/views/estoque/estoque-read/estoque-read.component';
import { ProdutoDetailsComponent } from './components/views/produto/produto-details/produto-details.component';
import { EstoqueCreateComponent } from './components/views/estoque/estoque-create/estoque-create.component';
import { EstoqueCreateEntradaComponent } from './components/views/estoque/estoque-create-entrada/estoque-create-entrada.component';
import { BoardAdminComponent } from './components/views/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/views/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/views/board-user/board-user.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { RegisterComponent } from './components/views/register/register.component';
import { AuthGuard } from './components/views/guard/auth.guard';

const routes: Routes = [
  {
    path: 'inicio',
    redirectTo: 'http://localhost:4200',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    component: LoginRequestComponent,
    canActivate: [UsuarioNaoAutenticadoGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UsuarioNaoAutenticadoGuard]
  },
  {
    path: '', 
    component: PrincipalComponent, 
    canActivate: [UsuarioAutenticadoGuard],
    children: 
    [
      { 
        path: 'home', component: HomeComponent
      },
      {
        path: 'produto', component: ProdutoReadComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'produto/create',
        component: ProdutoCreateComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'produto/delete/:id',
        component: ProdutoDeleteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'produto/update/:id',
        component: ProdutoUpdateComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'usuario',
        component: UsuarioReadComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario/create',
        component: UsuarioCreateComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario/delete/:id',
        component: UsuarioDeleteComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'usuario/update/:id',
        component: UsuarioUpdateComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }
      },
      {
        path: 'estoque',
        component: EstoqueReadComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'estoque/create',
        component: EstoqueCreateComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'estoque/create/entrada',
        component: EstoqueCreateEntradaComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      {
        path: 'produto/details',
        component: ProdutoDetailsComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN'] }
      },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD', 'ROLE_ADMIN', 'ROLE_USER'] } },
      { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] } },
      { path: 'mod', component: BoardModeratorComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_MOD'] } },
      { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
