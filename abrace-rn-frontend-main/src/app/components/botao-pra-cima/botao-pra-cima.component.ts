import { NgOptimizedImage } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-botao-pra-cima',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './botao-pra-cima.component.html',
  styleUrl: './botao-pra-cima.component.scss',
})
export class BotaoPraCimaComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 100) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
