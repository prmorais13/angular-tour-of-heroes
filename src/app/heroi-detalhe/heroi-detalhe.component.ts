import { Component, OnInit, Input } from '@angular/core';

import { Heroi } from '../models/heroi';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.scss']
})
export class HeroiDetalheComponent implements OnInit {

  @Input() heroi: Heroi;

  constructor() { }

  ngOnInit() {
  }

}
