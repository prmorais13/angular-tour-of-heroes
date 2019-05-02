import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroisComponent } from './herois/herois.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'detail/:id', component: HeroiDetalheComponent },
  { path: 'herois', component: HeroisComponent },
  { path: 'dashboard', component: DashboardComponent }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'herois'
  // },
  // {
  //   path: 'herois',
  //   loadChildren: './herois/herois.module#HeroisModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
