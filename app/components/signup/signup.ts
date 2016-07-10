import { Component } from '@angular/core';
import { FormBuilder, ControlGroup} from '@angular/common';

declare var Stamplay;
/*
This component is embedded in the Home Component and is displayed the first on the Home Page.
It takes care of Stamplay.User.signup() to register a user. Once registered the User has to manually
navigate to login segment and Login to the app.
The form is signupForm of type ControlGroup handled by using a FormBuilder
*/
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
