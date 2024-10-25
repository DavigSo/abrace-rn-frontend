import { SobreComponent } from './pages/sobre/sobre.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReceberComponent } from './pages/receber/receber.component';
import { LojinhaComponent } from './pages/lojinha/lojinha.component';
import { DoarDinheiroComponent } from './pages/doar-dinheiro/doar-dinheiro.component';
import { DoarInicialComponent } from './pages/doar-inicial/doar-inicial.component';
import { VoluntarieSeComponent } from './pages/voluntarie-se/voluntarie-se.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { DoarLojinhaComponent } from './pages/doar-lojinha/doar-lojinha.component';
import { DoarUsadosComponent } from './pages/doar-usados/doar-usados.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
    path: 'doar-inicial',
    component: DoarInicialComponent,
  },
  {
    path: 'doar-dinheiro',
    component: DoarDinheiroComponent,
  },
  {
    path: 'doar-usados',
    component: DoarUsadosComponent,
  },
  {
    path: 'doar-lojinha',
    component: DoarLojinhaComponent,
  },
  {
    path: 'lojinha',
    component: LojinhaComponent,
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
