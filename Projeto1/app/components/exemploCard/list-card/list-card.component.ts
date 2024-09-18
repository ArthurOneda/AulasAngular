import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  produtos = [
    {
      nome: "Placa de Vídeo",
      preco: 19.99,
      descricao: "Roda jogo bonito",
      url: "https://s.zst.com.br/cms-assets/2021/12/melhor-placa-de-v-deo-barata.webp"
    },
    {
      nome: "Memória Ram",
      preco: 9.99,
      descricao: "Deixa rápido",
      url: "https://s.zst.com.br/cms-assets/2022/08/qual_memoria_ram_comprar_corpo.webp"
    },
    {
      nome: "Processador",
      preco: 199.99,
      descricao: "Processa o jogo",
      url: "https://s.zst.com.br/cms-assets/2022/11/shutterstock_2082475195.webp"
    },
    {
      nome: "Placa-mãe",
      preco: 89.90,
      descricao: "Funciona",
      url: "https://previews.123rf.com/images/opikanets/opikanets2003/opikanets200300090/143530420-concepto-de-tecnolog%C3%ADa-de-hardware-en-luz-de-ne%C3%B3n-placa-base-en-luz-azul-roja-componente.jpg"
    },
  ]
}
