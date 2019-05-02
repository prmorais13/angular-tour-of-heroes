import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroisModule } from './herois/herois.module';
import { MensagensComponent } from './mensagens/mensagens.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, MensagensComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HeroisModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
