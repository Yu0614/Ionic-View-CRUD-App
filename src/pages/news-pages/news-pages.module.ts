import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPagesPage } from './news-pages';

@NgModule({
  declarations: [
    NewsPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPagesPage),
  ],
})
export class NewsPagesPageModule {}
