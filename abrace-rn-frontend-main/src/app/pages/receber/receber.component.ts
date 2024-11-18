import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotaoComponent } from '../../components/botao/botao.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-receber',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BotaoComponent, PopupComponent, NgxMaskDirective, NgxMaskPipe, CommonModule],
  templateUrl: './receber.component.html',
  styleUrl: './receber.component.scss',
})
export class ReceberComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;
  estados: string[] = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 
    'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 
    'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 
    'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 
    'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
  ];

  submitForm(event: Event) {
    // Evita o envio do formulário (não recarrega a página)
    event.preventDefault();

    // Exibe o popup
    this.popup.showPopup();
  }
}
