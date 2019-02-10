import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  public pessoa: any = {
    nome: 'thecastor',
    idade: 20
  };

  constructor() { }

  ngOnInit() {
  }

}
