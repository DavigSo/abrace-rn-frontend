import { Component, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { BotaoComponent } from "../../components/botao/botao.component";
import { PopupComponent } from "../../components/popup/popup.component";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-receber",
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BotaoComponent,
    PopupComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: "./receber.component.html",
  styleUrl: "./receber.component.scss",
})
export class ReceberComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;
  estados: string[] = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  formData = {
    nome: "",
    cpf: "",
    telefone: "",
    dataParto: "",
    sexoBebe: "",
    tempoGestacao: "",
    instagram: "",
    rua: "",
    numero: "",
    estado: "",
    cep: "",
    cidade: "",
    email: "",
    historia: "",
    autorizacao: "",
  };

  constructor(private http: HttpClient) {}

  submitForm(event: Event) {
    event.preventDefault();
    const url = "https://sheetdb.io/api/v1/j7z1tsiircwdc";

    const formattedData = { ...this.formData };

    this.http.post(url, formattedData).subscribe({
      next: (response) => {
        console.log("Form submitted successfully:", response);
        this.popup.showPopup();
      },
      error: (error) => {
        console.error("Error submitting form:", error);
        alert("Erro ao enviar o formulário. Por favor, tente novamente.");
      },
    });
  }
}
