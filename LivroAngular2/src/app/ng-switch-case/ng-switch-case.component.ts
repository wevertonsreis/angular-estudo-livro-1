import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {

  numero = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementarNumero(): void {
    this.numero++;
  }

}
