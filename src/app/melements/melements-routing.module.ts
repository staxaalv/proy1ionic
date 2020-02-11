import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MelementsPage } from './melements.page';

const routes: Routes = [
  {
    path: '',
    component: MelementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MelementsPageRoutingModule {}
