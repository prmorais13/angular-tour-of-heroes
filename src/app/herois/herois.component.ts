import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

// import { HEROIS } from './../models/mock-herois';
import { Heroi } from '../models/heroi';
import { HeroiService } from './heroi.service';

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

  // herois = HEROIS;
  herois: Heroi[];
  heroiSelecionado: Heroi;

  constructor(private heroiService: HeroiService) {}

  ngOnInit() {
    this.getHerois();
  }

  // onSelect(heroi: Heroi): void {
  //   this.heroiSelecionado = heroi;
  // }

  getHerois(): void {
    this.heroiService.getHerois().subscribe(
      dados => {
        this.herois = dados;
      },
      err => console.error(err)
    );
  }
}
