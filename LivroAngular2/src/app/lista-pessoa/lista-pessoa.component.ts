import { Component, OnInit } from '@angular/core';

import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  providers: [PessoaServiceService]
})
export class ListaPessoaComponent implements OnInit {

  pessoas: string[];
  nome: string;

  constructor(private pessoaService: PessoaServiceService) {
    this.pessoas = this.pessoaService.getPessoas();
  }

  ngOnInit() {
  }

  enviarNome(): void {
    this.pessoaService.setPessoa(this.nome);
  }

}
