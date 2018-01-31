import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireDatabase } from 'angularfire2/database'; // 追加
import { Observable } from 'rxjs/Observable'; // 追加

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  //ICOlist:Observable<{}>;
  Coinname:Observable<{}>; //test

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    afDB: AngularFireDatabase
  ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    //this.ICOlist =
    this.Coinname = afDB.object('Coinname').valueChanges();

  }
}
