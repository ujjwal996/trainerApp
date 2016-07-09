import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { SessionBuilderPage } from '../session-builder/session-builder';
import { BuildSession } from '../../components/build-session/build-session';

declare var Stamplay;

@Component({
  templateUrl: 'build/pages/your-sessions/your-sessions.html',
  directives: [ BuildSession ]
})
export class YourSessionsPage {

  constructor(private nav: NavController , private events: Events) {
    this.events.subscribe("sessionformsubmitted", (eventdata)=>{
      this.nav.push( SessionBuilderPage , {sessionInfo : eventdata});
    })
  }

}
