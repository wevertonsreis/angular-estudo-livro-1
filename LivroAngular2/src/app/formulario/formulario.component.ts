import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('Weverton', '(13) 98820-5300', 'weverton.sant.reis@gmail.com');

  constructor() { }

  ngOnInit() {}

}
