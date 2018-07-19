import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  tamanho = 20;
  valorFonte = this.tamanho + 'px';
  validaFonte = false;
  validaCor = false;

  constructor() { }

  ngOnInit() {
  }

  incrementar(): void {
    this.tamanho += 10;
    this.valorFonte = this.tamanho + 'px';
  }

  mudarFonte(): void {
    this.validaFonte = !this.validaFonte;
  }

  mudarCor(): void {
    this.validaCor = !this.validaCor;
  }

}
