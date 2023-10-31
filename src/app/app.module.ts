import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoReadComponent } from './components/views/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/views/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/views/produto/produto-delete/produto-delete.component';
import { HomeComponent } from './components/views/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProdutoUpdateComponent } from './components/views/produto/produto-update/produto-update.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { LoginRequestComponent } from './components/views/login/login-request/login-request.component';
import { PrincipalComponent } from './components/template/principal/principal.component';
import { EstoqueReadComponent } from './components/views/estoque/estoque-read/estoque-read.component';
import { ProdutoDetailsComponent } from './components/views/produto/produto-details/produto-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EstoqueCreateComponent } from './components/views/estoque/estoque-create/estoque-create.component';
import { EstoqueCreateEntradaComponent } from './components/views/estoque/estoque-create-entrada/estoque-create-entrada.component';
import { EstoqueDeleteComponent } from './components/views/estoque/estoque-delete/estoque-delete.component';
import { BoardAdminComponent } from './components/views/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/views/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/views/board-user/board-user.component';
import { ProfileComponent } from './components/views/profile/profile.component';
import { RegisterComponent } from './components/views/register/register.component';
import { httpInterceptorProviders } from './components/views/_helpers/http.interceptor';
import { AuthGuard } from './components/views/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ProdutoUpdateComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
    LoginRequestComponent,
    PrincipalComponent,
    EstoqueReadComponent,
    ProdutoDetailsComponent,
    EstoqueCreateComponent,
    EstoqueCreateEntradaComponent,
    EstoqueDeleteComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    CommonModule,
    CarouselModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  providers: [httpInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
