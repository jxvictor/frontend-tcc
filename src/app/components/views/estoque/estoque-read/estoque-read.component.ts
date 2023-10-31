import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../../../services/estoque.service';
import { Estoque } from '../../../model/estoque.model';
import { Page } from '../../../model/page.model';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ProdutoDetailsComponent } from '../../produto/produto-details/produto-details.component';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-estoque-read',
  templateUrl: './estoque-read.component.html',
  styleUrls: ['./estoque-read.component.css']
})
export class EstoqueReadComponent implements OnInit{
  estoques: Array<Estoque> = [];
  private page!: Page;
  pageEvent!: PageEvent;
  //data!: Date;

  displayedColumns: string[] = ['produto', 'quantidade', 'valorUnitario', 'data', 'tipo', 'acoes'];

  constructor(
    private service: EstoqueService,
    private router: Router,
    private dialog: MatDialog,
    public storageService: StorageService)
    {
      //this.data = new Date();
    }

  ngOnInit(): void {
    //this.findAll();
    this.pageEstoques(0, 10);
  }
  pageEstoques(page: number, size: number){
    this.service.findEstoquePage(page, size).subscribe(resposta => {
      this.page = resposta;
      this.estoques = this.page.content;
    })
  }
  onPaginateChange(event: PageEvent){
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page;
    this.service.findEstoquePage(page, size).subscribe(resposta =>{
      this.page = resposta;
      this.estoques = this.page.content;
    });
  }

  /*findAll() {
    this.service.findAll().subscribe(res => {
      this.estoques = res;
    })
  }*/

  navegarParaCategoriaCreate() {
    this.router.navigate(["estoque/create"])
  }

  navegarParaCategoriaCreateEntrada() {
    this.router.navigate(["estoque/create/entrada"])
  }

  abrirDetalhesDoProduto(produto: any): void {
    const dialogRef = this.dialog.open(ProdutoDetailsComponent, {
      width: '400px', // Defina o tamanho desejado
      data: produto // Passe o objeto do produto para o modal
    });
  }

  getClassByTipo(tipo: string): string {
    return tipo === 'Entrada' ? 'entrada' : 'saída';
  }

}
