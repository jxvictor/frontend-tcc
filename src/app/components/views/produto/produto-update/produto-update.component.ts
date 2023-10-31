import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {
  produto: Produto = {};
  nome = new FormControl('', [Validators.required]);
  valor = new FormControl('', [Validators.required]);
  quantidade = new FormControl('', [Validators.required]);

  constructor(
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produto.id! = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.produto.id!).subscribe((resposta) => {
      //this.produto.id = resposta.id;
      this.produto.nome = resposta.nome;
      this.produto.ano = resposta.ano;
      this.produto.modelo = resposta.modelo;
      this.produto.motor = resposta.motor;
      this.produto.numeroDeMotor = resposta.numeroDeMotor;
      this.produto.cor = resposta.cor;
      this.produto.referencia = resposta.referencia;
      this.produto.marca = resposta.marca;
      this.produto.lado = resposta.lado;
      this.produto.dianteira = resposta.dianteira;
      this.produto.traseira = resposta.traseira;
      this.produto.foto = resposta.foto;
      this.produto.valor = resposta.valor;
      this.produto.desconto = resposta.desconto;
      this.produto.quantidade = resposta.quantidade;
    });
  }

  /*update(): void {
    this.service.update(this.produto).subscribe((resposta) => {
      this.router.navigate(["produto"]);
      this.service.mensagem("Produto atualizado com sucesso");
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    });
  }*/
  update(): void {
    this.service.update(this.produto).subscribe({
      next: () => {
        this.router.navigate(["produto"]);
        this.service.mensagem("Produto atualizado com sucesso");
      },
      error: (err) => {
        this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
      }
    });
  }

  cancel(): void {
    this.router.navigate(['produto'])
  }

  getMessage() {
    if(this.nome.invalid){
      return 'O campo precisa ser preenchido.'
      //return 'O campo NOME deve conter entre 2 e 200 caracteres.'
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
