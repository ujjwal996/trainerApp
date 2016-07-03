import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';

import { YourClientsPage } from '../your-clients/your-clients';
import { Login } from '../../components/login/login';
import { Signup } from '../../components/signup/signup';

declare var Stamplay;

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives:[ Login, Signup ]
})
export class HomePage {
  trainerInfo:any;
  constructor(private nav: NavController, private events:Events) {
    this.events.subscribe('trainerloginSuccess', (trainerData)=>{
      this.trainerInfo = trainerData[0];
      this.nav.setRoot(YourClientsPage, {'trainerInfo' : this.trainerInfo });
    });
  }



  getcurrentuser(){
    Stamplay.User.currentUser().then((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  logout(){
    Stamplay.User.logout();
  }
}
