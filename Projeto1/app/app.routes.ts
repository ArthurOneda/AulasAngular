import { Routes } from '@angular/router';
import { ExemploAnimalComponent } from './components/exemplo-animal/exemplo-animal.component';
import { HomeComponent } from './components/home/home.component';
import { ListCardComponent } from './components/exemploCard/list-card/list-card.component';
import { ListaMusicaComponent } from './components/exercicioMusica/lista-musica/lista-musica.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'exemploAnimal',
        component: ExemploAnimalComponent
    },
    {
        path:'listCard',
        component: ListCardComponent
    },
    {
        path:'listMusica',
        component: ListaMusicaComponent
    }
];
