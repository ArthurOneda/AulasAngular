import { Component, Input } from '@angular/core';
import { Musica } from '../../../app.models';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {
  @Input() musica?:Musica
}
