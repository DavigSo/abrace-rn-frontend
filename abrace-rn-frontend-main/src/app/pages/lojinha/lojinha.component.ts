import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-lojinha',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './lojinha.component.html',
  styleUrl: './lojinha.component.scss',
})
export class LojinhaComponent {
  products = [
    {
      src: 'assets/produto1.jpg',
      alt: 'Produto 1',
      name: 'Produto 1',
      price: 50,
    },
    {
      src: 'assets/produto2.jpg',
      alt: 'Produto 2',
      name: 'Produto 2',
      price: 80,
    },
    {
      src: 'assets/produto3.jpg',
      alt: 'Produto 3',
      name: 'Produto 3',
      price: 150,
    },
    {
      src: 'assets/produto4.jpg',
      alt: 'Produto 4',
      name: 'Produto 4',
      price: 40,
    },
    {
      src: 'assets/produto5.jpg',
      alt: 'Produto 5',
      name: 'Produto 5',
      price: 15,
    },
    {
      src: 'assets/produto6.jpg',
      alt: 'Produto 6',
      name: 'Produto 6',
      price: 90,
    },
    {
      src: 'assets/produto7.jpg',
      alt: 'Produto 7',
      name: 'Produto 7',
      price: 60,
    },
    {
      src: 'assets/produto8.jpg',
      alt: 'Produto 8',
      name: 'Produto 8',
      price: 25,
    },
    {
      src: 'assets/produto9.jpg',
      alt: 'Produto 9',
      name: 'Produto 9',
      price: 200,
    },
    {
      src: 'assets/produto10.jpg',
      alt: 'Produto 10',
      name: 'Produto 10',
      price: 70,
    },
    {
      src: 'assets/produto11.jpg',
      alt: 'Produto 11',
      name: 'Produto 11',
      price: 120,
    },
    {
      src: 'assets/produto12.jpg',
      alt: 'Produto 12',
      name: 'Produto 12',
      price: 30,
    },
    {
      src: 'assets/produto13.jpg',
      alt: 'Produto 13',
      name: 'Produto 13',
      price: 20,
    },
    {
      src: 'assets/produto14.jpg',
      alt: 'Produto 14',
      name: 'Produto 14',
      price: 110,
    },
    {
      src: 'assets/produto15.jpg',
      alt: 'Produto 15',
      name: 'Produto 15',
      price: 80,
    },
    {
      src: 'assets/produto16.jpg',
      alt: 'Produto 16',
      name: 'Produto 16',
      price: 180,
    },
    {
      src: 'assets/produto17.jpg',
      alt: 'Produto 17',
      name: 'Produto 17',
      price: 50,
    },
    {
      src: 'assets/produto18.jpg',
      alt: 'Produto 18',
      name: 'Produto 18',
      price: 250,
    },
    {
      src: 'assets/produto19.jpg',
      alt: 'Produto 19',
      name: 'Produto 19',
      price: 300,
    },
    {
      src: 'assets/produto20.jpg',
      alt: 'Produto 20',
      name: 'Produto 20',
      price: 45,
    },
    {
      src: 'assets/produto21.jpg',
      alt: 'Produto 21',
      name: 'Produto 21',
      price: 90,
    },
    {
      src: 'assets/produto22.jpg',
      alt: 'Produto 22',
      name: 'Produto 22',
      price: 60,
    },
    {
      src: 'assets/produto23.jpg',
      alt: 'Produto 23',
      name: 'Produto 23',
      price: 150,
    },
    {
      src: 'assets/produto24.jpg',
      alt: 'Produto 24',
      name: 'Produto 24',
      price: 70,
    },
    {
      src: 'assets/produto25.jpg',
      alt: 'Produto 25',
      name: 'Produto 25',
      price: 35,
    },
    {
      src: 'assets/produto26.jpg',
      alt: 'Produto 26',
      name: 'Produto 26',
      price: 120,
    },
  ];
}
