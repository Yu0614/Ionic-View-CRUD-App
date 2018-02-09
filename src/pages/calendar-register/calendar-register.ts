import { Component } from '@angular/core';
import firebase from 'firebase';
import { NavController, NavParams } from 'ionic-angular';
import { ChartPage } from '../chart/chart';


@Component({
  selector: 'page-calendar-register',
  templateUrl:'calendar-register.html',
 
})
  
export class CalendarRegisterPage {

    reffer={}; //object
    DatabaseViewURL = 'Calendar/2018-01-30';
    registerLoop=[];  // class="loop1"
    
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
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
  ionViewDidLoad() {
    const readRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
     readRef.on('value',(snapshot) => {
      this.reffer = snapshot.val();
        snapshot.forEach(snap =>{ 
          this.registerLoop.push(snap.val());  
          return false; // boolean needed!!
        }); 
     });  // convert (object)firebase data to array for loop 
  }
      
  // search and show Table from database                                    //this.Loops[snap.key]=snap.val()
  searchTable(DatabaseViewRequest: string) :void{
   this.DatabaseViewURL = DatabaseViewRequest;
    const readRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
     readRef.on('value',(snapshot) => {
      this.reffer = snapshot.val();
        snapshot.forEach(snap =>{ 
          this.registerLoop.push(snap.val()); 
          return false; // boolean needed!!
        }); 
     });
  } 


  
  /*************************************************
  * ★ goTo Functions 
  *************************************************/

  goToChartPage(){ 
    this.navCtrl.push(ChartPage);
  }
  

}
/*CalendarTest = [
  {
    ArticleURL: "https://www.yahoo.co.jp/",
    CoinName: "BitCoin",
    EventName: "BitCoin buy",
    EventDate: "2018-01-31",
    Importance: "3",
    
  },
  {
    ArticleURL: 'https://www.yahoo.co.jp/',
    EventName: 'Ethereum softfork',
    Importance: 2,
    EventDate: '2018-01-31',
    CoinName: 'Ethereum'
  } 
]*/

/*readRef.on('value', readSnapshot => {
      this.reffer = readSnapshot.val();
    }); // object Object …used for refference at once*/
