import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../../pages/sobre/sobre.component';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, SobreComponent, BotaoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
