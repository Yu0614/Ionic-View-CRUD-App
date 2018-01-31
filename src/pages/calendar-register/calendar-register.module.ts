import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarRegisterPage } from './calendar-register';

@NgModule({
  declarations: [
    CalendarRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarRegisterPage),
  ],
})
export class CalendarRegisterPageModule {}
