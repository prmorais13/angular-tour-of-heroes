import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroi } from './models/heroi';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const herois = [
      { id: 11, nome: 'Mr. Paulo' },
      { id: 12, nome: 'Diogo' },
      { id: 13, nome: 'Polliana' },
      { id: 14, nome: 'Ana Paula' },
      { id: 15, nome: 'Ricardo' },
      { id: 16, nome: 'Fernanda' },
      { id: 17, nome: 'Adriana' },
      { id: 18, nome: 'Conceição' },
      { id: 19, nome: 'Maria José' },
      { id: 20, nome: 'Patrícia' }
    ];
    return { herois };
  }
  genId(herois: Heroi[]): number {
    return herois.length > 0
      ? Math.max(...herois.map(heroi => heroi.id)) + 1
      : 11;
  }
}
