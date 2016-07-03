import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import { HomePage } from './pages/home/home';
import { DietBuilder } from './pages/diet-builder/diet-builder';
import { YourClientsPage } from './pages/your-clients/your-clients';

@Component({
  template: `
  <ion-nav  [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  pages=[ HomePage ]
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
