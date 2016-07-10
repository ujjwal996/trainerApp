import { Component , EventEmitter} from '@angular/core';
import { FormBuilder, ControlGroup} from '@angular/common';
import { NavController } from 'ionic-angular';

import { TabLayoutPage } from '../../pages/tab-layout/tab-layout';
declare var Stamplay;
/*
The login Component takes care of Login form and handles Stamplay.User.login().
On successfull login it emits an event to the home component to navigate to TabLayoutPage
*/
@Component({
  selector: 'trainer-login-form',
  templateUrl: 'build/components/login/login.html'
})
export class Login {
  loginfailed:boolean=false;
  loginForm: ControlGroup;
  text: string;
  loggedIn : EventEmitter<any> = new EventEmitter();

  constructor(private fb:FormBuilder, private nav : NavController) {
    this.loginForm = fb.group({
      email:[''],
      password :['']
    })
  }

  loginAttempt(){

    Stamplay.User.login(this.loginForm.value).then((res)=>{
      console.log("here");
     this.loggedIn.emit(res); // this event is caught in home page and triggers navigation to TabLayoutPage
    },(err)=>{
      this.loginfailed=true;
    });

  }
}
