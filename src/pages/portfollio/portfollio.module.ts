import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortfollioPage } from './portfollio';

@NgModule({
  declarations: [
    PortfollioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortfollioPage),
  ],
})
export class PortfollioPageModule {}
