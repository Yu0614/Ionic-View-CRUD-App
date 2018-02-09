
import firebase from 'firebase';
import { Component,Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import { SignupPage } from '../signup/signup';
import { SignupRooterPage } from '../signup-rooter/signup-rooter';
import { CalendarRegisterPage } from '../calendar-register/calendar-register';

//DomSanitizer
import { DomSanitizer} from '@angular/platform-browser';

//CryptoWatch
//import { CryptowatchEmbed } from 'cryptowatch-embed';
   
//WebView
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
 
    DatabaseViewURL = 'CoinList';
    url: any; // iframe's view url
    CryptoWatch: any;
    CryptoCurrencyChart: any;
    TradeViewURL:any;
    ChartLoop=[];
    

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //public CWE: CryptowatchEmbed 
  ) {
    this.url="https://cryptowat.ch/";
    this.CryptoWatch = "https://cryptowat.ch/bitfinex/btcusd"; 
    this.CryptoCurrencyChart="https://www.cryptocurrencychart.com/"; 
    //this.TradeViewURL="https://jp.tradingview.com/chart/";

    /*this.chart = new CryptowatchEmbed('bitfinex', 'btcusd');
    this.chart = new CryptowatchEmbed('bitfinex', 'btcusd', {
      width: 800,
      height: 200,
      presetColorScheme: 'bushido'
    }); 
    this.chart.mount('#chart-container');*/  
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
  } 
  
  ionViewDidLoad() {
    console.log("chartPage was successfully loaded");
    const readCoinRef: firebase.database.Reference = firebase.database().ref(this.DatabaseViewURL);
     readCoinRef.on('value',(snapshot) => {
        snapshot.forEach(snap =>{ 
          this.ChartLoop.push(snap.val());  
          return false; // boolean needed!!
        }); 
     });  // convert (object)firebase data to array for loop 
  }

}
