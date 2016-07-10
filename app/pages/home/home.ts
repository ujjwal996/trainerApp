import {Component} from '@angular/core';
import {NavController, Events} from 'ionic-angular';

import { TabLayoutPage } from '../tab-layout/tab-layout';
import { Login } from '../../components/login/login';
import { Signup } from '../../components/signup/signup';

declare var Stamplay;
/*
This page displays the Intro Page for the trainer. Display includes LoginComponent and SignUpComponent displayed in segments.
The Stamplay.User is used to check if there is a trainer loggedIn and displays the succeeding TabsLayout Page.
*/
@Component({
  templateUrl: 'build/pages/home/home.html',
  directives:[ Login, Signup ]
})
export class HomePage {
  trainerInfo:any;
  constructor(private nav: NavController, private events:Events) {

  }

 ionViewWillEnter(){
   Stamplay.User.currentUser().then((res)=>{
     if(res.user._id != undefined )
     {
       console.log(res.user._id);
       this.nav.setRoot(TabLayoutPage, {"trainerData" : res.user});
     }
   });
 }

 ionViewDidEnter(){
   Stamplay.User.currentUser().then((res)=>{
     if(res.user._id != undefined )
     {
       this.nav.setRoot(TabLayoutPage);
     }
   });
 }

  getcurrentuser(){
    Stamplay.User.currentUser().then((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

  loginSuccess(loggedInUser){
    this.nav.setRoot(TabLayoutPage,{'trainerData' : loggedInUser});
  }
  logout(){
    Stamplay.User.logout();
  }
}
