import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YatayGecisBasvuruPageRoutingModule } from './yatay-gecis-basvuru-routing.module';

import { YatayGecisBasvuruPage } from './yatay-gecis-basvuru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YatayGecisBasvuruPageRoutingModule
  ],
  declarations: [YatayGecisBasvuruPage]
})
export class YatayGecisBasvuruPageModule {}
