import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BotaoComponent } from '../../components/botao/botao.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-voluntarie-se',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BotaoComponent, PopupComponent, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './voluntarie-se.component.html',
  styleUrls: ['./voluntarie-se.component.scss'],
})
export class VoluntarieSeComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;

  submitForm(event: Event) {
    // Evita o envio do formulário (não recarrega a página)
    event.preventDefault();

    // Exibe o popup
    this.popup.showPopup();
  }
}
