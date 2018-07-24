import { Injectable, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

  meuContatos: ContatoModel[] = [];
  enviarCotato = new EventEmitter();

  constructor() { }

  setContato(contato: ContatoModel): void {
    this.meuContatos.push(contato);
    this.enviarCotato.emit(this.meuContatos);
  }

  getContato(id: number): ContatoModel {
    return this.meuContatos[id];
  }

}
