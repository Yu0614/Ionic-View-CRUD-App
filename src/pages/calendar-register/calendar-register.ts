import { Component } from '@angular/core';
import firebase from 'firebase';
import { NavController, NavParams } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from "angularfire2/database";
//import { AngularFireObject } from 'angularfire2/database/interfaces';
import { ChartPage } from '../chart/chart';

/**
 * Generated class for the CalendarRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-calendar-register',
  templateUrl:'calendar-register.html',
  /*template: `
  <ion-item *ngFor="let ref of roopReffer">
          <ion-row>
              <ion-col>
                <div class="col" id="RefEventDate">{{ref.EventDate}}</div>
              </ion-col>
              <ion-col>  
                <div class="col" id="RefCoinName">{{ref.CoinName}}</div>
              </ion-col>
              <ion-col>
                <div class="col" id="RefImportance">{{ref.Importance}}</div>
              </ion-col>
              <ion-col>
                  <div class="col" id="RefEventName">{{ref.EventName}}</div>
              </ion-col>
              <ion-col>
                  <div class="col" id="RefArticleURL">{{ref.ArticleURL}}</div>
              </ion-col>  
          </ion-row>
        </ion-item>
        `,*/
})
export class CalendarRegisterPage {

    reffer; 
    DatabaseViewURL;
    roopReffer; // htmlに受け渡しする箱

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDB: AngularFireDatabase,
    
  ) {
      this.reffer = {}; 
      this.DatabaseViewURL='Calendar/2018-01-30/Bit'; // Default table DB URL set
      /*this.roopReffer= [//　箱のひな形？　
        {
          ArticleURL:'' ,
          CoinName:'' ,
          EventDate: '',
          EventName: '' ,
          Importance: ''
        }
      ] */

      
    }

  
  /*************************************************
  * ★create Event (Notice: the Order is important)
  *************************************************/
  
  createEvent(
    CoinName: string,
    EventDate: string ,
    Importance:number, 
    ArticleURL: string, 
    EventName: string,
    DatabaseURL: string
    ): void {
      const createRef: firebase.database.Reference = firebase.database().ref(DatabaseURL);
    createRef.set({ 
      CoinName, 
      EventDate,
      EventName,
      Importance,
      ArticleURL,
       
    })
  }


  /*************************************************
  * ★update Event (Notice: the Order is important)
  *************************************************/
  updateEvent(
    CoinName: string,
    EventDate: string ,
    Importance:number, 
    ArticleURL: string, 
    EventName: string,
    DatabaseURL: string
    
   ): void {
    const updateRef: firebase.database.Reference = firebase.database().ref(DatabaseURL);
    updateRef.update({  
      CoinName, 
      EventDate,
      EventName,
      Importance,
      ArticleURL,
      

      
    })
    
  } 

  /*************************************************
  * ★ delete Event (Notice: the Order is important)
  *************************************************/
 
  deleteEvent(): void{
    const deleteRef: firebase.database.Reference = firebase.database().ref(`/Calendar/2018_01_30/Bit/`);
    deleteRef.remove()
  }



  /*************************************************
  * ★ referrence Function
  *************************************************/

  //Default set table
  ionViewDidLoad() :void{
    const readRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
    readRef.on('value', readSnapshot => {
       this.reffer = readSnapshot.val();
    }); 
  }


  // search and show Table from database
  searchTable(DatabaseViewRequest: string) :void{
    this.DatabaseViewURL = DatabaseViewRequest;
    const readRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
    
    readRef.on('value', readSnapshot => {
       this.roopReffer = readSnapshot.val();
    }); 

  } 
  
  /*************************************************
  * ★ goTo Functions 
  *************************************************/

  goToChartPage(){ 
    this.navCtrl.push(ChartPage);
  }
  

}
