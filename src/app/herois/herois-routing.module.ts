import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroisComponent } from './herois.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeroisComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroisRoutingModule {}
