import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Heroi } from '../models/heroi';
import { HeroiService } from '../herois/heroi.service';

@Component({
  selector: 'app-heroi-detalhe',
  templateUrl: './heroi-detalhe.component.html',
  styleUrls: ['./heroi-detalhe.component.scss']
})
export class HeroiDetalheComponent implements OnInit {
  @Input() heroi: Heroi;

  constructor(
    private route: ActivatedRoute,
    private heroiService: HeroiService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHeroi();
  }

  getHeroi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroiService.getHeroi(id).subscribe(
      heroi => {
        if (heroi) {
          this.heroi = heroi;
        } else {
          console.error(`Erro ao buscar Herói com ID ${id}!`);
        }
      },
      error => console.error(`Erro ao buscar heroi com ID ${id}`, error)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
