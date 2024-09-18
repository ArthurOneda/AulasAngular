import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/exemploCard/card/card.component";
import { CommonModule } from '@angular/common';
import { ListCardComponent } from "./components/exemploCard/list-card/list-card.component";
import { ListaMusicaComponent } from "./components/exercicioMusica/lista-musica/lista-musica.component";
import { ExemploAnimalComponent } from './components/exemplo-animal/exemplo-animal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule, ListCardComponent, ListaMusicaComponent, ExemploAnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto01';
  nomes = ["Arthur", "Pedro", "João"];
  frutas = ["Maçã", "Banana", "Goiaba", "Laranja"];
  filmes = ["Ação", "Comédia", "Terror", "Drama"]
  url = "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png"
  rodarAlerta(){
    alert("Essa é o logo do angular");
  }
}
