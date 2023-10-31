import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Page } from '../../../model/page.model';
import { Produto } from '../../../model/produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { ProdutoDetailsComponent } from '../produto-details/produto-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Array<Produto> = [];
  private page!: Page;
  pageEvent!: PageEvent;

  searchTerm: string = '';

  displayedColumns: string[] = ['nome', 'ano', 'modelo', 'referencia', 'marca', 'valor', 'quantidade', 'acoes'];

  constructor(
    private service: ProdutoService,
    private router: Router,
    private dialog: MatDialog)
    {}

  ngOnInit(): void {
    //this.findAll();
    this.pageProdutos(0, 10);
  }
  pageProdutos(page: number, size: number){
    this.service.findProdutoPage(page, size).subscribe(resposta => {
      this.page = resposta;
      this.produtos = this.page.content;
    })
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page;
    this.service.findProdutoPage(page, size).subscribe(resposta =>{
      this.page = resposta;
      this.produtos = this.page.content;
    });
  }

  /*findAll() {
    this.service.findAll().subscribe(res => {
      this.produtos = res;
    })
  }*/

  navegarParaCategoriaCreate() {
    this.router.navigate(["produto/create"])
  }

  abrirDetalhesDoProduto(produto: any): void {
    const dialogRef = this.dialog.open(ProdutoDetailsComponent, {
      width: '400px', // Defina o tamanho desejado
      data: produto // Passe o objeto do produto para o modal
    });
  }

}