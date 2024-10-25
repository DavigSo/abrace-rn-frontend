import { Component, Input } from '@angular/core';

type BotaoVariantes = "pequeno-rosa"
| "pequeno-azul" | "branco-letra-azul" | "branco-letra-rosa" | "rosa-letra-branca" | "pequeno-branco";

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss'
})
export class BotaoComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BotaoVariantes = "branco-letra-azul";
}
