import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-doar-inicial',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent],
  templateUrl: './doar-inicial.component.html',
  styleUrl: './doar-inicial.component.scss',
})
export class DoarInicialComponent {}
