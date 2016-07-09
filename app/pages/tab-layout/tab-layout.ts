import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';

import { YourSessionsPage } from '../your-sessions/your-sessions';
import { YourClientsPage } from '../your-clients/your-clients';
import { DietBuilderPage } from '../diet-builder/diet-builder';
import { PersonalPage } from '../personal/personal';


@Component({
  templateUrl: 'build/pages/tab-layout/tab-layout.html'
})
export class TabLayoutPage {
tab1Root: any ;
trainerInfo : any;
tab2Root : any ;
tab3Root: any ;
tab4Root : any;
  constructor(private nav: NavController , private params: NavParams) {
    // set the root pages for each tab
    this.tab1Root = YourSessionsPage;
    this.tab2Root = YourClientsPage;
    this.tab3Root = DietBuilderPage;
    this.tab4Root = PersonalPage;
    this.trainerInfo = this.params.get('trainerData');

  }
}
