import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MensagemService } from '../mensagens/mensagem.service';

import { Heroi } from '../models/heroi';
// import { HEROIS } from '../models/mock-herois';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {
  constructor(private http: HttpClient, private msgService: MensagemService) {}

  private heroisUrl = 'api/herois'; // URL to web api

  getHerois(): Observable<Heroi[]> {
    // this.msgService.adicionar('Heróis listados!');
    // return of(HEROIS);
    return this.http.get<Heroi[]>(this.heroisUrl).pipe(
      tap(_ => this.log('Heróis encontrados!')),
      catchError(this.handleError<Heroi[]>('getHeroi', []))
    );
  }

  getHeroi(id: number): Observable<Heroi> {
    // this.msgService.adicionar(`Herói com ID ${id} encontrado!`);
    // return of(HEROIS.find(heroi => heroi.id === id));
    return this.http.get<Heroi>(`${this.heroisUrl}/${id}`).pipe(
      tap(_ => this.log(`Herói com ID ${id} encontrado!`)),
      catchError(this.handleError<Heroi>(`getHeroi ID ${id}`))
    );
  }

  private log(msg: string) {
    this.msgService.adicionar(`Heroi Service: ${msg}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
