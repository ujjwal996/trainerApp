import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { ControlGroup, FormBuilder } from '@angular/common';

declare var Stamplay;

@Component({
  selector: 'build-session',
  templateUrl: 'build/components/build-session/build-session.html'
})
export class BuildSession {
  sessionForm : ControlGroup;
  text: string;

  constructor( private fb: FormBuilder , private events: Events) {
    this.sessionForm = fb.group({
      name : [''],
      date_start :[''],
      date_end : [''],
      time_start : [''],
      time_end :[''],
      location :['']
    })
  }

  submitSessionform(){
    console.log(this.sessionForm.value);
    Stamplay.Object("sessions").save(this.sessionForm.value).then((res)=>{
      this.events.publish("sessionformsubmitted", res);
    },(err)=>{
      console.log(err + "in sessions stamplay form update");
    })
  }
}
