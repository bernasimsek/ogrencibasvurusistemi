import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasvuruBitenlerPageRoutingModule } from './basvuru-bitenler-routing.module';

import { BasvuruBitenlerPage } from './basvuru-bitenler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasvuruBitenlerPageRoutingModule
  ],
  declarations: [BasvuruBitenlerPage]
})
export class BasvuruBitenlerPageModule {}
