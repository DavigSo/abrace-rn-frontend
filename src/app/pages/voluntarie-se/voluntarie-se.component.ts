import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BotaoComponent } from '../../components/botao/botao.component';

@Component({
  selector: 'app-voluntarie-se',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BotaoComponent],
  templateUrl: './voluntarie-se.component.html',
  styleUrl: './voluntarie-se.component.scss',
})
export class VoluntarieSeComponent {}
