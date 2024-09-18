import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exemplo-animal.component.html',
  styleUrl: './exemplo-animal.component.css'
})
export class ExemploAnimalComponent {
  animais:string[] = ["Cachorro", "Gato", "Pato", "Lebre"]
  isActive:boolean = true
  onClick(){
    this.isActive = !this.isActive
  }
}
