import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { OpcoesDoarComponent } from '../../components/opcoes-doar/opcoes-doar.component';

@Component({
  selector: 'app-doar-lojinha',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent, OpcoesDoarComponent],
  templateUrl: './doar-lojinha.component.html',
  styleUrl: './doar-lojinha.component.scss'
})
export class DoarLojinhaComponent {

}
