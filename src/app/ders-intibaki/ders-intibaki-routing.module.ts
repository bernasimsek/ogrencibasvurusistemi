import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DersIntibakiPage } from './ders-intibaki.page';

const routes: Routes = [
  {
    path: '',
    component: DersIntibakiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DersIntibakiPageRoutingModule {}
