import { Component, OnInit } from '@angular/core';

import { MensagemService } from './mensagem.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {
  constructor(private msgService: MensagemService) {}

  ngOnInit() {}
}
