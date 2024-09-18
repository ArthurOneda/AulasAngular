import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/atividade-usuario/usuarios/usuarios.component';
import { ProdutoComponent } from './components/atividade-produto/produto/produto.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'produtos',
        component: ProdutoComponent
    }
];
