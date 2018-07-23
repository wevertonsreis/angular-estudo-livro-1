import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable()
export class NomeTecService {

  constructor(@Optional() private meuLog: MeuLogService) {}

  getNomesTec(): string[] {
    if (this.meuLog) {
      this.meuLog.setLog('consultou o array de tecnologias');
    }
    return ['Java', 'TypeScript', 'HTML', 'CSS'];
  }

}
