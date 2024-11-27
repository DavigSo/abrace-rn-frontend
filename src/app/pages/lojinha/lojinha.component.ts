import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-lojinha',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './lojinha.component.html',
  styleUrl: './lojinha.component.scss'
})
export class LojinhaComponent {
  products = [
    {
      src: 'assets/produto1.jpg',
      alt: 'Produto 1',
      name: 'Produto 1'
    },
    {
      src: 'assets/produto2.jpg',
      alt: 'Produto 2',
      name: 'Produto 2'
    },
    {
      src: 'assets/produto3.jpg',
      alt: 'Produto 3',
      name: 'Produto 3'
    },
    {
      src: 'assets/produto4.jpg',
      alt: 'Produto 4',
      name: 'Produto 4'
    },
    {
      src: 'assets/produto5.jpg',
      alt: 'Produto 5',
      name: 'Produto 5'
    },
    {
      src: 'assets/produto6.jpg',
      alt: 'Produto 6',
      name: 'Produto 6'
    },
    {
      src: 'assets/produto7.jpg',
      alt: 'Produto 7',
      name: 'Produto 7'
    },
    {
      src: 'assets/produto8.jpg',
      alt: 'Produto 8',
      name: 'Produto 8'
    },
    {
      src: 'assets/produto9.jpg',
      alt: 'Produto 9',
      name: 'Produto 9'
    }
  ];
}
