import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  nomesPessoas = ['Joao', 'Maria', 'Pedro', 'Ana', 'Carlos'];

  constructor() { }

  getPessoas(): string[] {
    return this.nomesPessoas;
  }

  setPessoa(nome: string): void {
    this.nomesPessoas.push(nome);
  }

}
