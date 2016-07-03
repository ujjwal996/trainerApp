import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'alternatives-modal',
  templateUrl: 'build/components/alternatives-modal/alternatives-modal.html'
})
export class AlternativesModal {

  text: string;

  constructor(private modalView: ViewController) {
    this.text = 'Hello World';
  }

  closeModal(){
    this.modalView.dismiss();
  }
}
