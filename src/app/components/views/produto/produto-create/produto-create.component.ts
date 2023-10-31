import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../../model/produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {}
  //produto: Produto = new Produto();
  nome = new FormControl('', [Validators.required]);
  ano = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  quantidade = new FormControl('', [Validators.required]);
  //texto = new FormControl("", [Validators.minLength(10)]);

  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.produto).subscribe((resposta: any) => {
      console.log(resposta);
      this.router.navigate(['produto'])
      this.service.mensagem('Produto criada com sucesso!');
    }, (error: any) => {
      console.log(error);
      this.service.mensagem("Erro ao criar novo produto! Tente mais tarde!");
    })
  }

  cancel(): void {
    this.router.navigate(['produto'])
    this.service.mensagem('Você cancelou a criação de uma nova produto!');
  }

  getMessage() {
    if(this.nome.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo NOME deve conter entre 2 e 200 caracteres.'
    }
    if(this.ano.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo ANO não pode ficar vazio.'
    }
    if(this.valor.invalid){
      //return 'O campo VALOR não pode ficar vazio.'
      return 'O campo precisa ser preenchido.'
    }
    if(this.quantidade.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo QUANTIDADE não pode ficar vazio.'
    }
    return false;
  }

}