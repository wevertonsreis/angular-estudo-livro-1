import { Injectable, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

  meuContatos: ContatoModel[] = [];
  enviarCotato = new EventEmitter();

  constructor() { }

  setContato(contato: ContatoModel): void {
    console.log('setContato ContatosDataBaseService');

    this.meuContatos.push(contato);
    this.enviarCotato.emit(this.meuContatos);

    console.log(this.meuContatos);
  }

  getContato(id: number): ContatoModel {
    return this.meuContatos[id];
  }

}
