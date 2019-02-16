import { MeuFormComponent } from './../meu-form/meu-form.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public url: String = 'http://loiane.com';
  public cursoAngular: Boolean = true;
  public urlImagem: String = 'http://lorempixel.com/400/200/nature';
  public valorAtual: String = '';
  public valorSalvo: String = '';

  public isMouseOver: Boolean = false;
  public nome: String = 'abc';

  public nomeDoCurso: String = 'Angular';


  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 5;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    return alert('fui clicado !');
  }

  onKeyUp(e: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>e.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
