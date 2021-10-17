import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YazOkuluBasvuruPage } from './yaz-okulu-basvuru.page';

const routes: Routes = [
  {
    path: '',
    component: YazOkuluBasvuruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YazOkuluBasvuruPageRoutingModule {}
