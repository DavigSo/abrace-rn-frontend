import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-doar-dinheiro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './doar-dinheiro.component.html',
  styleUrl: './doar-dinheiro.component.scss',
})
export class DoarDinheiroComponent {}
