import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientPage } from '../client-page/client-page';

@Component({
  templateUrl: 'build/pages/your-clients/your-clients.html',
})
export class YourClientsPage {
  trainerInfo:any;
  users = [{name:'User1'}];
  searchQuery :string;

  constructor(private nav: NavController, private params: NavParams) {
    this.trainerInfo = this.params.get('trainerInfo')
  }
  openUserPage(user){
    this.nav.push( ClientPage, {'user' : user} );
  }
}
