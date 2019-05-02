import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  mensagens: string[] = [];

  adicionar(msg: string) {
    this.mensagens.push(msg);
  }

  limpar() {
    this.mensagens = [];
  }
  constructor() {}
}
