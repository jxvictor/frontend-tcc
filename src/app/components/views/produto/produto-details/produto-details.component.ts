import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../../model/produto.model';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent {

  produto!: Produto;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private dialogRef: MatDialogRef<ProdutoDetailsComponent>)
    {
      this.produto = data;
    }

    fecharModal() {
      this.dialogRef.close(); // Fecha o modal
    }

}
