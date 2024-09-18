import { Component, Input } from '@angular/core';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {
  @Input() produto!:Produto
  constructor(){}
}
