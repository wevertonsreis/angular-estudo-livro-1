import { Component } from '@angular/core';

import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular 2';
  foto  = 'favicon.ico';
  desenvolvimento: string[] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java =)'];
  valor: string;

  constructor(private alertService: AlertService) {
  }

  enviarAlerta(): void {
    this.alertService.msgAlerta();
  }

  valorPassado(valorPassado: string): void {
    this.valor = valorPassado;
  }

}
