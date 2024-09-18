import { Component } from '@angular/core';
import { MusicaComponent } from "../musica/musica.component";
import { CommonModule } from '@angular/common';
import { Musica } from '../../../app.models';

@Component({
  selector: 'app-lista-musica',
  standalone: true,
  imports: [MusicaComponent, CommonModule],
  templateUrl: './lista-musica.component.html',
  styleUrl: './lista-musica.component.css'
})
export class ListaMusicaComponent {
  musicas:Musica[] = [
    {
      titulo:"Musica 01",
      genero:"Pop",
      artista:"Artista 01",
      image:"https://placehold.co/600x400?text=Musica%5Cn1"
    },
    {
      titulo:"Musica 02",
      genero:"Rock",
      artista:"Artista 02",
      image:"https://placehold.co/600x400?text=Musica%5Cn2"
    },
    {
      titulo:"Musica 03",
      genero:"Sertanejo",
      artista:"Artista 03",
      image:"https://placehold.co/600x400?text=Musica%5Cn3"
    },
    {
      titulo:"Musica 04",
      genero:"Pagode",
      artista:"Artista 04",
      image:"https://placehold.co/600x400?text=Musica%5Cn4"
    },
    {
      titulo:"Musica 05",
      genero:"Eletrônica",
      artista:"Artista 05",
      image:"https://placehold.co/600x400?text=Musica%5Cn5"
    },
    {
      titulo:"Musica 06",
      genero:"MPB",
      artista:"Artista 06",
      image:"https://placehold.co/600x400?text=Musica%5Cn6"
    }
  ]
}