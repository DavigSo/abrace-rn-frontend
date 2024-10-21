import { SobreComponent } from './pages/sobre/sobre.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReceberComponent } from './pages/receber/receber.component';
import { LojinhaComponent } from './pages/lojinha/lojinha.component';
import { DoarDinheiroComponent } from './pages/doar-dinheiro/doar-dinheiro.component';
import { DoarInicialComponent } from './pages/doar-inicial/doar-inicial.component';
import { VoluntarieSeComponent } from './pages/voluntarie-se/voluntarie-se.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'receber',
    component: ReceberComponent,
  },
  {
    path: 'lojinha',
    component: LojinhaComponent,
  },
  {
    path: 'doar-dinheiro',
    component: DoarDinheiroComponent,
  },
  {
    path: 'doar-inicial',
    component: DoarInicialComponent,
  },
  {
    path: 'voluntarie-se',
    component: VoluntarieSeComponent,
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
  },
];
