import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasvuruBitenlerPage } from './basvuru-bitenler.page';

const routes: Routes = [
  {
    path: '',
    component: BasvuruBitenlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasvuruBitenlerPageRoutingModule {}
