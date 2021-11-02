import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasvuruDevamEdenPageRoutingModule } from './basvuru-devam-eden-routing.module';

import { BasvuruDevamEdenPage } from './basvuru-devam-eden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasvuruDevamEdenPageRoutingModule
  ],
  declarations: [BasvuruDevamEdenPage]
})
export class BasvuruDevamEdenPageModule {}
