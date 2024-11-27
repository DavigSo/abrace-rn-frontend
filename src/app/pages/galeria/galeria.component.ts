import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  cards = [
    { src: 'assets/img1.jpg', alt: 'Imagem 1', txt: 'Kit Completo' },
    { src: 'assets/img3.jpg', alt: 'Imagem 3', txt: 'Kit Roupinhas' },
    { src: 'assets/img5.jpg', alt: 'Imagem 5', txt: 'Kit Higiene' },
    {
      src: 'assets/img11.jpg',
      alt: 'Imagem 11',
      txt: 'Hellen é uma das mães beneficiadas por nossas ações solidárias.'
    },
    {
      src: 'assets/img12.jpg',
      alt: 'Imagem 12',
      txt: 'Emilly é uma mãe que recebeu apoio essencial de nossas doações.'
    },
    { src: 'assets/img13.jpg', alt: 'Imagem 13', txt: 'Doações sendo entregue a uma mãe!' },
    {
      src: 'assets/img15.jpg',
      alt: 'Imagem 15',
      txt: 'Rayane é uma das mães acolhidas pelo nosso programa de doações.'
    },
    { src: 'assets/img16.jpg', alt: 'Imagem 16', txt: 'Entrega de kit completo!' },
    {
      src: 'assets/img19.jpg',
      alt: 'Imagem 19',
      txt: 'Leandra encontrou na nossa iniciativa o suporte que precisava para ela e sua família.'
    },
    {
      src: 'assets/img20.jpg',
      alt: 'Imagem 20',
      txt: 'Vitoria é uma das mulheres assistidas pelo nosso projeto.'
    }
  ];
}
