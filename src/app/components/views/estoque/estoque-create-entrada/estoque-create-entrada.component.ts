import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Estoque } from '../../../model/estoque.model';
import { EstoqueService } from '../../../services/estoque.service';
import { Produto } from '../../../model/produto.model';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-estoque-create-entrada',
  templateUrl: './estoque-create-entrada.component.html',
  styleUrls: ['./estoque-create-entrada.component.css']
})
export class EstoqueCreateEntradaComponent implements OnInit {

  estoque: Estoque = {}
  //produto: Produto = new Produto();
  produto = new FormControl('', [Validators.required]);
  quantidade = new FormControl('', [Validators.required]);
  valorUnitario = new FormControl('', [Validators.required]);
  tipo = new FormControl('', [Validators.required]);
  //texto = new FormControl("", [Validators.minLength(10)]);

  produtos: Produto[] = [];

  constructor(private service: EstoqueService, private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.findProdutoPage(0, 10).subscribe((resposta: any) => {
      this.produtos = resposta.content;
    });
    this.estoque.tipo = 'Entrada';
  }

  create(): void {
    this.service.createEntrada(this.estoque).subscribe((resposta: any) => {
      console.log(resposta);
      this.router.navigate(['estoque'])
      this.service.mensagem('Controle de entrada de produto criado com sucesso!');
    }, (error: any) => {
      console.log(error);
      this.service.mensagem("Erro ao criar novo controle de entrada de produto! Tente mais tarde!");
    })
  }

  cancel(): void {
    this.router.navigate(['estoque'])
    this.service.mensagem('Você cancelou a criação de um novo controle entrada!');
  }

  getMessage() {
    if(this.produto.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo NOME deve conter entre 2 e 200 caracteres.'
    }
    if(this.quantidade.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo ANO não pode ficar vazio.'
    }
    if(this.valorUnitario.invalid){
      //return 'O campo VALOR não pode ficar vazio.'
      return 'O campo precisa ser preenchido.'
    }
    if(this.tipo.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo QUANTIDADE não pode ficar vazio.'
    }
    return false;
  }

}