import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { AngularFireDatabase,AngularFireList} from "angularfire2/database";
/**
 * Generated class for the SignupRooterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-signup-rooter',
  templateUrl: 'signup-rooter.html',
})
export class SignupRooterPage {

  currentUsername: AngularFireList<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDB: AngularFireDatabase
  ) {
    this.currentUsername= afDB.list('/user'); //Select from firebase's userName
  }

  goToSignupPage(){
    this.navCtrl.push(SignupPage);
  }
  
}
