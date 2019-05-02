import { Component, OnInit } from '@angular/core';

import { HeroiService } from '../herois/heroi.service';

import { Heroi } from '../models/heroi';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(private heroiSerivce: HeroiService) {}

  ngOnInit() {
    this.getHerois();
  }

  getHerois(): void {
    this.heroiSerivce
      .getHerois()
      .subscribe(
        dados => (this.herois = dados.slice(1, 5)),
        error => console.error('Erro ao buscar lista de heróis', error)
      );
  }
}
