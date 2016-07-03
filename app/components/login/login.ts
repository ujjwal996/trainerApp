import { Component } from '@angular/core';
import { FormBuilder, ControlGroup} from '@angular/common';
import { Events } from 'ionic-angular';

declare var Stamplay;

@Component({
  selector: 'trainer-login-form',
  templateUrl: 'build/components/login/login.html'
})
export class Login {
  loginfailed:boolean=false;
  loginForm: ControlGroup;
  text: string;

  constructor(private fb:FormBuilder, private event: Events) {
    this.loginForm = fb.group({
      email:[''],
      password :['']
    })
  }

  loginAttempt(){

    Stamplay.User.login(this.loginForm.value).then((res)=>{
      this.event.publish('trainerloginSuccess', res)
    },(err)=>{
      this.loginfailed=true;
    });
  }
}
