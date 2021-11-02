import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasvuruDevamEdenPage } from './basvuru-devam-eden.page';

const routes: Routes = [
  {
    path: '',
    component: BasvuruDevamEdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasvuruDevamEdenPageRoutingModule {}
