import { Component } from '@angular/core';
import firebase from 'firebase';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase,/* AngularFireList*/} from "angularfire2/database";
import { ChartPage } from '../chart/chart';
//import { DataSnapshot } from '@firebase/database/dist/esm/src/api/DataSnapshot';

//import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the CalendarRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 


@Component({
  selector: 'page-calendar-register',
  templateUrl:'calendar-register.html',
 
})
  
export class CalendarRegisterPage {

  

    reffer={}; //object
    DatabaseViewURL = 'Calendar/2018-01-30/Bit';
    loopReffer;  // htmlに受け渡しする箱
    //Loops=[];
    //arrays =[];
    /*articles: // 型の返り値定義 代入ばーじょん
      {
        url:string,
        title:string,
        author:string,
        released:string
      }[]=[];*/
      CalendarTest = [
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
      ]

      Calendar:{
          ArticleURL: string,
          CoinName: string,
          EventName: string,
          EventDate: string,
          Importance: string,
      }[]=[]; // 型指定・設定値初期化

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDB: AngularFireDatabase,
    
  ) {
    console.log(this.CalendarTest[0]);
    console.log('this.CalendarTest[0]');
    console.log(this.CalendarTest[1]);
    console.log('this.CalendarTest[1]');
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

      /*this.reffer = readSnapshot.forEach(function(childSnapshot){
        const a= readSnapshot.exportVal;
      });
      
      console.log(this.reffer);
      console.log(a);*/
    
    /* readRef.on('value', readSnapshot => {
       this.reffer = readSnapshot.val();*/ // デフォルト

       

      }); 

      
  
       
  
      
       /*readRef.subscribe(data =>{
         this.Calendar = data['Calendar'];
       });*/
       
       //Object { ArticleURL: "Art", CoinName: "BitCoin", EventDate: "2018-01-31", EventName: "Event", Importance: "1" }
       
       /*const arrays= Object.keys(this.reffer).map(function(key){return arrays[key]});
       this.arrays = arrays;
       console.log(this.arrays);*/
       
    
    
  }


  


  // search and show Table from database
  searchTable(DatabaseViewRequest: string) :void{

 /* this.DatabaseViewURL = DatabaseViewRequest;
    const readTableRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
    readTableRef.on('value', readSnapshot => {
       this.loopReffer = readSnapshot.val();
       console.log(this.loopReffer);// object
       console.log("loopReffer")

      
        

    });*/

  } 


  
  /*************************************************
  * ★ goTo Functions 
  *************************************************/

  goToChartPage(){ 
    this.navCtrl.push(ChartPage);
  }
  

}
