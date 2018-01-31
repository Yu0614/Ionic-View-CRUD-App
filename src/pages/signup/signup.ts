import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase,AngularFireList} from "angularfire2/database";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  RegisterData: AngularFireList<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDB: AngularFireDatabase
  ) {
    this.RegisterData = afDB.list('/userData');
  }

  registerUserName(userName){
    this.RegisterData.push({
      userName: userName
    }).then( newUser =>{
      this.navCtrl.pop();
    },error =>{
      console.log(error);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
