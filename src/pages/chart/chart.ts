import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { SignupPage } from '../signup/signup';
import { SignupRooterPage } from '../signup-rooter/signup-rooter';
import { CalendarRegisterPage } from '../calendar-register/calendar-register';
//firebase
import { AngularFireDatabase,AngularFireList} from "angularfire2/database";

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  currentUseNname: AngularFireList<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDB: AngularFireDatabase
  ) {
    this.currentUseNname= afDB.list('/userName'); //Select from firebase's userName
  }

  //goTo Options
  goToSignupPage(){
    this.navCtrl.push(SignupPage);
  }
  goToSignupRooterPage(){
    this.navCtrl.push(SignupRooterPage);
  }
  goToCalendarRegistarPage(){
    this.navCtrl.push(CalendarRegisterPage);
  } //tka
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
  }

}
