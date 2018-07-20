import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao = false;
  conteudos: string[] = [];
  idade = 0;

  constructor() {
  }

  ngOnInit() {
  }

  meuClick(): void {
    console.log('OK');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(valorInput): void {
    console.log(valorInput);
  }

  validarSenha(senha: string): void {
    if (senha.length < 5) {
      this.habilitarBotao = false;
    } else {
      this.habilitarBotao = true;
    }
  }

  gravarSenha(senha: string): void {
    console.log('Senha gravada com sucesso!' + senha);
  }

  adicionar(conteudo: string): void {
    console.log('Adicionando conteudo: ' + conteudo);
    this.conteudos.push(conteudo);
    conteudo = '';
  }

  verIdade(ano: number): void {
    console.log('ano informado: ' + ano);
    const data = new Date();
    this.idade = data.getFullYear() - ano;
  }

}