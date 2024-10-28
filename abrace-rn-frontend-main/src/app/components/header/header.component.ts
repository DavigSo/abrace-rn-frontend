import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../../pages/sobre/sobre.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, SobreComponent, BotaoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
