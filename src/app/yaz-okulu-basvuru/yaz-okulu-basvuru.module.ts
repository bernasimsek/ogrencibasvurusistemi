import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YazOkuluBasvuruPageRoutingModule } from './yaz-okulu-basvuru-routing.module';

import { YazOkuluBasvuruPage } from './yaz-okulu-basvuru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YazOkuluBasvuruPageRoutingModule
  ],
  declarations: [YazOkuluBasvuruPage]
})
export class YazOkuluBasvuruPageModule {}
