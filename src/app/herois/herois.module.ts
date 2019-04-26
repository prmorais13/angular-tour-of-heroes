import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HeroisRoutingModule } from './herois-routing.module';
import { HeroisComponent } from './herois.component';
import { HeroiDetalheComponent } from '../heroi-detalhe/heroi-detalhe.component';

@NgModule({
  declarations: [HeroisComponent, HeroiDetalheComponent],
  exports: [HeroisComponent],
  imports: [CommonModule, FormsModule, HeroisRoutingModule]
})
export class HeroisModule {}
