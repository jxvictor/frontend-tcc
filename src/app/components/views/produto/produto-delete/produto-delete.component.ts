import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto = {}

  constructor(
    private http: HttpClient,
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.produto.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.produto.id!).subscribe((resposta) => {
      //this.produto.nome = resposta.nome;
      //this.produto.referencia = resposta.referencia;
      this.produto = resposta;
      //this.produto.modelo = resposta.modelo;
      console.log(this.produto);
    })
  }

  delete(): void {
    this.service.deleteProduto(this.produto.id!).subscribe({
      next: () => {
        this.router.navigate(['produto']);
        this.service.mensagem('Produto deletado com sucesso!');
        console.log('Produto deletado com sucesso!');
      },
      error: error => {
        console.error(error);
      },
    });
  }
  

  cancel(): void {
    this.router.navigate(['produto'])
    this.service.mensagem('Você cancelou a remoção de um produto!');
  }

}