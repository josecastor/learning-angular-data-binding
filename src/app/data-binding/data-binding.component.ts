import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public url: String = 'http://loiane.com';
  public cursoAngular: Boolean = true;
  public urlImagem: String = 'http://lorempixel.com/400/200/nature';

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 5;
  }

  getCurtirCurso() {
    return true;
  }

}
