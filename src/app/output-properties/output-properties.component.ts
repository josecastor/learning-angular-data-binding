import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
