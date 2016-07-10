import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
Can only navigate to this page from "YourSessionsPage" with an id supplied as 'user' parameter.
Here the Trainer should be able to perform actions - "Add" , "Contact" and more.
A back button on the top of the page leads back the previous instance of YourSessionsPage.
*/

@Component({
  templateUrl: 'build/pages/client-page/client-page.html',
})
export class ClientPage {
  user:any;
  constructor(private nav: NavController, private params: NavParams) {
    this.user = this.params.get('user');
  }

}
