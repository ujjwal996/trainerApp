import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/client-page/client-page.html',
})
export class ClientPage {
  user:any;
  constructor(private nav: NavController, private params: NavParams) {
    this.user = this.params.get('user');
  }

}
