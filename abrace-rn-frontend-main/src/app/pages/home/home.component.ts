import { BotaoComponent } from './../../components/botao/botao.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage, BotaoComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
