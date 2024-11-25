import { Component, ViewChild } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { BotaoComponent } from "../../components/botao/botao.component";
import { PopupComponent } from "../../components/popup/popup.component";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-voluntarie-se",
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BotaoComponent,
    PopupComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: "./voluntarie-se.component.html",
  styleUrls: ["./voluntarie-se.component.scss"],
})
export class VoluntarieSeComponent {
  @ViewChild(PopupComponent) popup!: PopupComponent;

  constructor(private http: HttpClient) {}

  formData = {
    nome: "",
    cpf: "",
    telefone: "",
    cidade: "",
    email: "",
    ajuda: "",
    mensagem: "",
  };

  submitForm(event: Event) {
    event.preventDefault();
    const url = "https://sheetdb.io/api/v1/db1c2w33lso24";

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
