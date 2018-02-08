import { Component, Pipe, PipeTransform } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Http } from '@angular/http';
import { DomSanitizer} from '@angular/platform-browser';
//import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//WebView
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-news', 
  templateUrl: 'news.html',
})
export class NewsPage { 

  YoutubeID:"gMWZm4c0W6Q";

  CryptoWatch: any;
  CryptoCurrencyChart: any;
  url:any;

  

  NewsTest = [
    {
      ArticleURL: "http://localhost:8100/",
      CoinName: "BitCoin",
      EventName: "yahoo",
      EventDate: "2018-01-31",
      EventImage: "assets/imgs/mig.jpg",
      YoutubeID:""
    },
    {
      ArticleURL: 'https://www.google.com/',
      EventName: 'google',
      EventDate: '2018-01-31',
      CoinName: 'Ethereum',
      EventImage: "assets/imgs/logo.png",
      YoutubeID:""
    },
    {
      ArticleURL: 'https://www.youtube.com',
      EventName: 'youtube',
      EventDate: '2018-01-31',
      CoinName: 'Iota',
      EventImage: "assets/imgs/youtube.png",
      YoutubeID:""
    }  

  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private iab: InAppBrowser,
    //private youtube: YoutubeVideoPlayer,
    public http: Http,
    //private sanitizer: DomSanitizer
  ) {
    this.CryptoWatch = "https://cryptowat.ch/"; 
    this.CryptoCurrencyChart="https://www.cryptocurrencychart.com/"; 
    //https://www.youtube.com/embed/QX4j_zHAlw8 
    //http://kids.disney.co.jp/game/3018.html
    //https://cryptowat.ch/

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

 /* playVideo(videoId) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gMWZm4c0W6Q");
  }*/

  // webview another page
 showPage(){
  const browser = this.iab.create('https://google.com/',);
  browser.show();

 }

 //cryptoCompare'api
 getAPI(){
    const res= this.http.get('https://www.cryptocompare.com/api/data/coinlist/');
    console.log(res);
 }

//webViewTest
 urlpaste(){
  this.url = "http://kids.disney.co.jp/game/3018.html";
}


}





