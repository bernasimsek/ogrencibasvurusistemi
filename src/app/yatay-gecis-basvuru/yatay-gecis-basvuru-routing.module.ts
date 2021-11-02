import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YatayGecisBasvuruPage } from './yatay-gecis-basvuru.page';

const routes: Routes = [
  {
    path: '',
    component: YatayGecisBasvuruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YatayGecisBasvuruPageRoutingModule {}
