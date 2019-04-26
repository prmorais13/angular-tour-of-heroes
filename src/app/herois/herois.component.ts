import { Component, OnInit } from '@angular/core';

import { Heroi } from '../models/heroi';
import { HEROIS } from './../models/mock-herois';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {

  // heroi: Heroi = {
  //   id: 1,
  //   nome: 'Paulo Roberto'
  // };

  heroiSelecionado: Heroi;

  herois = HEROIS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(heroi: Heroi): void {
    this.heroiSelecionado = heroi;
  }

}
