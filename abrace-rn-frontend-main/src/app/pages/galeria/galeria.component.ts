import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgOptimizedImage, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  cards = [
    { src: 'assets/img1.jpg', alt: 'Imagem 1', txt: 'Teste' },
    { src: 'assets/img2.jpg', alt: 'Imagem 2', txt: 'Teste' },
    { src: 'assets/img3.jpg', alt: 'Imagem 3', txt: 'Teste' },
    { src: 'assets/img4.jpg', alt: 'Imagem 4', txt: 'Teste' },
    { src: 'assets/img5.jpg', alt: 'Imagem 5', txt: 'Teste' },
    { src: 'assets/img6.jpg', alt: 'Imagem 6', txt: 'Teste' },
    { src: 'assets/img7.jpg', alt: 'Imagem 7', txt: 'Teste' },
    { src: 'assets/img8.jpg', alt: 'Imagem 8', txt: 'Teste' },
    { src: 'assets/img9.jpg', alt: 'Imagem 9', txt: 'Teste' },
    { src: 'assets/img10.jpg', alt: 'Imagem 10', txt: 'Teste' },
    { src: 'assets/img11.jpg', alt: 'Imagem 11', txt: 'Teste' },
    { src: 'assets/img12.jpg', alt: 'Imagem 12', txt: 'Teste' },
    { src: 'assets/img13.jpg', alt: 'Imagem 13', txt: 'Teste' },
    { src: 'assets/img14.jpg', alt: 'Imagem 14', txt: 'Teste' },
    { src: 'assets/img15.jpg', alt: 'Imagem 15', txt: 'Teste' },
    { src: 'assets/img16.jpg', alt: 'Imagem 16', txt: 'Teste' },
    { src: 'assets/img17.jpg', alt: 'Imagem 17', txt: 'Teste' },
    { src: 'assets/img18.jpg', alt: 'Imagem 18', txt: 'Teste' },
    { src: 'assets/img19.jpg', alt: 'Imagem 19', txt: 'Teste' },
    { src: 'assets/img20.jpg', alt: 'Imagem 20', txt: 'Teste' },
  ];
}
