import { BotaoComponent } from './../../components/botao/botao.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  isTextVisible = false;

  toggleTextVisibility() {
    this.isTextVisible = !this.isTextVisible;
  }
}
