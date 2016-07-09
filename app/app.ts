import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import { TabLayoutPage } from './pages/tab-layout/tab-layout';
import { HomePage } from './pages/home/home';
import { DietBuilderPage } from './pages/diet-builder/diet-builder';
import { YourClientsPage } from './pages/your-clients/your-clients';
import { YourSessionsPage } from './pages/your-sessions/your-sessions';

@Component({
  template: `
  <ion-nav  [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  pages=[ HomePage, DietBuilderPage , YourSessionsPage ]
  rootPage: any = HomePage ;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
