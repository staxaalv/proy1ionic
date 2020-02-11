import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelementsPageRoutingModule } from './melements-routing.module';

import { MelementsPage } from './melements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelementsPageRoutingModule
  ],
  declarations: [MelementsPage]
})
export class MelementsPageModule {}
