import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourListPage } from './tour-list';

@NgModule({
  declarations: [
    TourListPage,
  ],
  imports: [
    IonicPageModule.forChild(TourListPage),
  ],
})
export class TourListPageModule {}
