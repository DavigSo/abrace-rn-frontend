import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BotaoPraCimaComponent } from '../../components/botao-pra-cima/botao-pra-cima.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BotaoPraCimaComponent, FooterComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
