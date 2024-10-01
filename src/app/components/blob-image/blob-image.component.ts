import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blob-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './blob-image.component.html',
  styleUrl: './blob-image.component.scss',
})
export class BlobImageComponent {}
