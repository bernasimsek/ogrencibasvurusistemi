import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DgsBasvuruPageRoutingModule } from './dgs-basvuru-routing.module';

import { DgsBasvuruPage } from './dgs-basvuru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DgsBasvuruPageRoutingModule
  ],
  declarations: [DgsBasvuruPage]
})
export class DgsBasvuruPageModule {}
