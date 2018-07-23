import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomeTecService]
})
export class DiComponent implements OnInit {

  tecnologias: string[] = [];

  constructor(private nomeTecService: NomeTecService, private alertService: AlertService) {
    this.tecnologias = nomeTecService.getNomesTec();
    this.alertService.msgAlerta();
  }

  ngOnInit() {
  }

}
