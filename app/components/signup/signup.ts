import { Component } from '@angular/core';
import { FormBuilder, ControlGroup} from '@angular/common';

declare var Stamplay;

@Component({
  selector: 'trainer-signup-form',
  templateUrl: 'build/components/signup/signup.html'
})
export class Signup {
  signupForm:ControlGroup;
  signupfailed:boolean = false;

  constructor(private fb:FormBuilder) {
    this.signupForm= fb.group({
      email:[''],
      password:[''],
      displayName:['']
    })
  }

  signupAttempt(){
    Stamplay.User.signup(this.signupForm.value).then((res)=>{
      console.log(res);
    },(err)=>{
      this.signupfailed=true;
    });
  }
}
