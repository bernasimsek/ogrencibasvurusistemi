import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapBasvuruPage } from './cap-basvuru.page';

const routes: Routes = [
  {
    path: '',
    component: CapBasvuruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapBasvuruPageRoutingModule {}
