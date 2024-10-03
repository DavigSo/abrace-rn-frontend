import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlobImageComponent } from '../blob-image/blob-image.component';
import { SectionMissaoComponent } from '../section-missao/section-missao.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BlobImageComponent, SectionMissaoComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
