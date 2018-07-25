import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel[] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private databaseService: ContatosDataBaseService) { }

  ngOnInit() {
    console.log('ngOnInit() ListaUsuarioComponent');

    this.databaseService.enviarCotato.subscribe(contatos => this.listaDeContatos = contatos);

    console.log(this.listaDeContatos);
  }

  contatoClicado(id: number): void {
    this.idClicado.emit(id);
  }

}
