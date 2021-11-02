import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapBasvuruPageRoutingModule } from './cap-basvuru-routing.module';

import { CapBasvuruPage } from './cap-basvuru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapBasvuruPageRoutingModule
  ],
  declarations: [CapBasvuruPage]
})
export class CapBasvuruPageModule {}
