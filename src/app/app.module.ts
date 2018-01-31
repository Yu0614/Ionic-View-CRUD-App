import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Observable } from 'rxjs/Observable';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';


// Pages
import { ChartPage } from '../pages/chart/chart';
import { NewsPage } from '../pages/news/news';
import { CalendarPage } from '../pages/calendar/calendar';
import { PortfollioPage } from '../pages/portfollio/portfollio';
import { SignupPage } from '../pages/signup/signup';
import { SignupRooterPage } from '../pages/signup-rooter/signup-rooter';
import { CalendarRegisterPage } from '../pages/calendar-register/calendar-register';


// Tab Controller
import { TabsPage } from '../pages/tabs/tabs';

// AngularFire, firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AngularFireAuthModule} from 'angularfire2/auth';
//import * as firebase from 'firebase/app';

// firebase configs
import { firebaseConfig } from "../environment";

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
    CalendarRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

