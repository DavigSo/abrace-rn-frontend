import { SobreComponent } from './pages/sobre/sobre.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReceberComponent } from './pages/receber/receber.component';
import { LojinhaComponent } from './pages/lojinha/lojinha.component';
import { DoarDinheiroComponent } from './pages/doar-dinheiro/doar-dinheiro.component';

export const routes: Routes = [
  {
    path: '',
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
];
