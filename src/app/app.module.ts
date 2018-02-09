import { NgModule, ErrorHandler,Injectable,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Observable } from 'rxjs/Observable';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//Ionic Pro
import { Pro } from '@ionic/pro';

const IonicPro = Pro.init('f8dcb53f', {
  appVersion: "0.0.1"
});

// Pages
import { ChartPage } from '../pages/chart/chart';
import { NewsPage, SafePipe } from '../pages/news/news';
import { CalendarPage } from '../pages/calendar/calendar';
import { PortfollioPage } from '../pages/portfollio/portfollio';
import { SignupPage } from '../pages/signup/signup';
import { SignupRooterPage } from '../pages/signup-rooter/signup-rooter';
import { CalendarRegisterPage } from '../pages/calendar-register/calendar-register';


// Tab Controller
import { TabsPage } from '../pages/tabs/tabs';

// AngularFire, firebase
import * as firebase from 'firebase/app';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection} from 'angularfire2/firestore';

// firebase configs
import { firebaseConfig } from "../environment";

//youtube
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YoutubeProvider } from '../providers/youtube/youtube';
import { HttpModule } from '@angular/http';


//inAppBrowser
import { InAppBrowser } from '@ionic-native/in-app-browser';

//
//import { CryptowatchEmbed }  from 'cryptowatch-embed';


@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure 
      // IonicErrorHandler has been added to the providers list below
    }
  }
  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@Injectable()
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ChartPage,
    NewsPage,
    CalendarPage,
    PortfollioPage,
    SignupPage,
    SignupRooterPage,
    CalendarRegisterPage,
    SafePipe,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ChartPage, 
    NewsPage,
    CalendarPage,
    PortfollioPage,
    SignupPage,
    SignupRooterPage, // after added menu list , erase this function...
    CalendarRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    YoutubeProvider,
    YoutubeVideoPlayer,
    InAppBrowser,
     
  ]
})


export class AppModule {}

