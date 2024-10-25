import { BotaoComponent } from './../../components/botao/botao.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BotaoPraCimaComponent } from '../../components/botao-pra-cima/botao-pra-cima.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BotaoPraCimaComponent, FooterComponent, NgOptimizedImage, BotaoComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
