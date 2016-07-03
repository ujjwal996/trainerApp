import { Component } from '@angular/core';
import { Modal, NavController } from 'ionic-angular';

import { AlternativesModal } from '../../components/alternatives-modal/alternatives-modal';

@Component({
  selector: 'diet-builder',
  templateUrl: 'build/components/diet-builder/diet-builder.html'
})
export class DietBuilder {
  update: boolean = false;
  categoryChoice : string;
  text: string;
  days = [
    {
      date: "date and time",
      breakfast : {
      nutritionSpecs: 'nutrition value',
      items: {
        name : 'meal item' ,
        quantity : 9 ,
        measurementIn : 'cups'
      },
      alternates : [
        {
        name: 'altenrate2',
        quantity : 9 ,
        measurementIn : 'cups'
      },
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    }
    ]
    },
    lunch : {
      nutritionSpecs: 'nutrition value',
      items: {
        name : 'meal item' ,
        quantity : 9 ,
        measurementIn : 'cups'
      },
      alternates : [
        {
        name: 'altenrate2',
        quantity : 9 ,
        measurementIn : 'cups'
      },
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    }
    ]
    },
    dinner:{
      nutritionSpecs: 'nutrition value',
      items: {
        name : 'meal item' ,
        quantity : 9 ,
        measurementIn : 'cups'
      },
      alternates : [
        {
        name: 'altenrate2',
        quantity : 9 ,
        measurementIn : 'cups'
      },
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    }
    ]
    }
  },
  {
    date: "date and time",
    breakfast : {
    nutritionSpecs: 'nutrition value',
    items: {
      name : 'meal item' ,
      quantity : 9 ,
      measurementIn : 'cups'
    },
    alternates : [
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    },
    {
    name: 'altenrate2',
    quantity : 9 ,
    measurementIn : 'cups'
  }
  ]
  },
  lunch : {
    nutritionSpecs: 'nutrition value',
    items: {
      name : 'meal item' ,
      quantity : 9 ,
      measurementIn : 'cups'
    },
    alternates : [
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    },
    {
    name: 'altenrate2',
    quantity : 9 ,
    measurementIn : 'cups'
  }
  ]
  },
  dinner:{
    nutritionSpecs: 'nutrition value',
    items: {
      name : 'meal item' ,
      quantity : 9 ,
      measurementIn : 'cups'
    },
    alternates : [
      {
      name: 'altenrate2',
      quantity : 9 ,
      measurementIn : 'cups'
    },
    {
    name: 'altenrate2',
    quantity : 9 ,
    measurementIn : 'cups'
  }
  ]
  }
}
]
  constructor(private nav: NavController) {

  }
  updateGrid(){
    if(this.categoryChoice!=undefined){
      this.update=true;
      console.log(this.categoryChoice);
    }
  }

  showAlternatives(){
    let altmodal = Modal.create(AlternativesModal);
    this.nav.present(altmodal);
  }
}
