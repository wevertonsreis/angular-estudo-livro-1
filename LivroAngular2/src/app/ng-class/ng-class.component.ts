import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  valorClassBinding = false;

  constructor() { }

  ngOnInit() {
  }

  mudarClassBinding() {
    this.valorClassBinding = !this.valorClassBinding;
  }

  classe(): any {
    return {
      'cor-fundo': this.valorClassBinding,
      'cor-letra': this.valorClassBinding,
      'estilo-letra': this.valorClassBinding,
      'borda-paragrafo': this.valorClassBinding
    };
  }

}
