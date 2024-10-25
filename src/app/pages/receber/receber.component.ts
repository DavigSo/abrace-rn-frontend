import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotaoComponent } from '../../components/botao/botao.component';

@Component({
  selector: 'app-receber',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BotaoComponent],
  templateUrl: './receber.component.html',
  styleUrl: './receber.component.scss',
})
export class ReceberComponent {}
