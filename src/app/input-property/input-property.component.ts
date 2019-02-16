import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('nome') nomeCurso: String = '';
  // quando o nome da variavel exposta na propriedade do componente
  // é diferente do nome declarado precisamos injetar no decorator do componente

  constructor() { }

  ngOnInit() {
  }

}
