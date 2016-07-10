import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { SessionBuilderPage } from '../session-builder/session-builder';
import { BuildSession } from '../../components/build-session/build-session';

declare var Stamplay;

/*
The BuildSession component is provided as a directive.
The trainer has 2 segments - " View " and "Build".
The View segment is to provide the trainer with filters and a view of the filtered sessions he runs

The Build segment involves the procedure of Building a Session from scratch.
Currently the Build includes a form about the session and a next button which submits this form and navigates to the next step (yet to be added, currently is a blank "SessionBuilderPage")
*/

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
