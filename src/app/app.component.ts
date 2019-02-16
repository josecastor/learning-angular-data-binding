import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  // tslint:disable-next-line:no-inferrable-types
  valor: number = 5;

  deletarCiclo: Boolean = true;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = false;
  }
}
