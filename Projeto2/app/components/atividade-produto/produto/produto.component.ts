import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../models/produto';
import { ProdutoService } from '../../../services/produto.service';
import { ListaProdutosComponent } from "../lista-produtos/lista-produtos.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, ListaProdutosComponent, ReactiveFormsModule, CdkDrag, CdkDropList],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produtos:Produto[] = []
  produto!:Produto
  produtoForm!: FormGroup
  idProduto:string = ''
  updateAvaliable = false
  constructor(private produtoService:ProdutoService){
    this.produtoForm = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(0),
      price: new FormControl(0)
    })
  }
  ngOnInit(){
    this.getProduto()
  }
  getProduto(){
    let produtos = []
    this.produtoService.getAllProdutos().subscribe({
      next: res => this.produtos = res,
      error: err => console.log(err)
    })
  }
  addProduto(){
    this.produtoService.addProduto(this.produtoForm.value).subscribe({
      next: res => {
        alert("Produto cadastrado")
        this.getProduto()
        this.produtoForm.reset
      },
      error: err => console.log(err)
    })
  }
  deleteProduto(id:string){
    this.produtoService.deleteProduto(id).subscribe({
      next: () => {alert("Produto deletado com sucesso!")
      this.getProduto()},
      error: () => alert("Erro ao deletar o produto")
    })
  }
  onEdit(produto:Produto){
    this.idProduto = produto.id
    this.updateAvaliable = true
    this.produtoForm.patchValue({
      name: produto.name,
      quantity: produto.quantity,
      price: produto.price
    })
  }
  updateProduto(){
    this.produtoService.updateProduto(this.idProduto, this.produtoForm.value).subscribe({
      next: res =>{
        console.log(res)
        this.updateAvaliable = false
        this.produtoForm.reset()
        this.getProduto()
        this.idProduto = ''
      },
      error: err => console.log(err)
    })
  }
}
