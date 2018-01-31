import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupRooterPage } from './signup-rooter';

@NgModule({
  declarations: [
    SignupRooterPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupRooterPage),
  ],
})
export class SignupRooterPageModule {}
