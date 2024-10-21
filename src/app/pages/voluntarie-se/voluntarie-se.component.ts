import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-voluntarie-se',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './voluntarie-se.component.html',
  styleUrl: './voluntarie-se.component.scss',
})
export class VoluntarieSeComponent {}
