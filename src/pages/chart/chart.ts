import { Component,Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//pages
import { SignupPage } from '../signup/signup';
import { SignupRooterPage } from '../signup-rooter/signup-rooter';
import { CalendarRegisterPage } from '../calendar-register/calendar-register';

//firebase
//import { AngularFireDatabase,/*AngularFireList*/} from "angularfire2/database";

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

  
    url: any; // iframe's view url
    CryptoWatch: any;
    CryptoCurrencyChart: any;
    TradeViewURL:any;
    CoinList = [
      {
        CoinName: "BitCoin",
        Symble: "BTC",
        CompareRate: "22%",
        CompareResult: "➚",
        CurrentValue: "￥860,577",
        ArticleURL: 'https://www.youtube.com',
      },
      {
        CoinName: "Ethereum",
        Symble: "ETH",
        CompareRate: "1%",
        CompareResult: "➘",
        CurrentValue: "￥86,466",
        ArticleURL: 'https://www.youtube.com',
      },{
        CoinName: "Ethereum",
        Symble: "ETH",
        CompareRate: "1%",
        CompareResult: "➘",
        CurrentValue: "￥86,466",
        ArticleURL: 'https://www.youtube.com',
      },{ 
        CoinName: "Ethereum",
        Symble: "ETH",
        CompareRate: "1%",
        CompareResult: "➘",
        CurrentValue: "￥86,466",
        ArticleURL: 'https://www.youtube.com',
      },{
        CoinName: "Ethereum",
        Symble: "ETH",
        CompareRate: "1%",
        CompareResult: "➘",
        CurrentValue: "￥86,466",
        ArticleURL: 'https://www.youtube.com',
      },
    ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //public afDB: AngularFireDatabase,
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
  } //tka
   
  ionViewDidLoad() {
    console.log("chartPage was successfully loaded");
    
    
  }

}
