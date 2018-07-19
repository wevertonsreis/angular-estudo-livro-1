import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  nomes: any[] = [
    {id: 1, nome: 'Joao'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Carlos'},
    {id: 4, nome: 'Ana'}
  ];

  constructor() { }

  ngOnInit() {
  }

  meuSave(index: number, nomes: any): number {
    return nomes.id;
  }

  atualizar(): void {
    this.nomes = [
      {id: 1, nome: 'Joao'},
      {id: 2, nome: 'Maria'},
      {id: 3, nome: 'Carlos'},
      {id: 4, nome: 'Ana'},
      {id: 4, nome: 'nome novo'}
    ];
  }
}
