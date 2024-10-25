import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-lojinha',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent],
  templateUrl: './lojinha.component.html',
  styleUrl: './lojinha.component.scss',
})
export class LojinhaComponent {}
