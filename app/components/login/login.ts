import { Component } from '@angular/core';
import { FormBuilder, ControlGroup} from '@angular/common';
import { NavController } from 'ionic-angular';

import { TabLayoutPage } from '../../pages/tab-layout/tab-layout';
declare var Stamplay;

@Component({
  selector: 'trainer-login-form',
  templateUrl: 'build/components/login/login.html'
})
export class Login {
  loginfailed:boolean=false;
  loginForm: ControlGroup;
  text: string;

  constructor(private fb:FormBuilder, private nav : NavController) {
    this.loginForm = fb.group({
      email:[''],
      password :['']
    })
  }

  loginAttempt(){

    Stamplay.User.login(this.loginForm.value).then((res)=>{
      console.log("here");
     this.nav.setRoot(TabLayoutPage , {"trainerData": res})
    },(err)=>{
      this.loginfailed=true;
    });

  }
}
