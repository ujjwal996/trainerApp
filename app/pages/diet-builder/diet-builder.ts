import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

declare var Stamplay;
/*
The Diet Builder Page has a grid view and is the 3rd tab in the tabs layout.
The view requires user to click on the header item to choose category. Once chosen we make a call to Stamplay.Object("usercategories"),
to get the id of the selected category. This id is then fed to Stamplay.Object('perdaydiet') to get the field "categoryFor".

This loads the row with all days available in the Stamplay Object "perdatdiet". Every day in the first row is a button and clicking that button
makes a call to the Stamplay Object "dietplans"(which contains breakfastItems,lunchItems, dinnerItems) to get the mealItems.
The mealItems are displayed as "Breakfast", "Lunch" and "Dinner" header cards.

--> Todo = Arrange the data better to optimise the infinitely scrollable grid.

*/
@Component({
  templateUrl: 'build/pages/diet-builder/diet-builder.html',
})
export class DietBuilderPage {
  categoryChoice : any;
  update:boolean;
  dayresdata : any;
  openmeals:boolean;
  itemresdata:any;

  constructor(private nav: NavController) {

  }
  presentcategorySheet(){
    let categoryAlert = Alert.create();
    categoryAlert.setTitle('Choose category to edit diet for');

    categoryAlert.addInput({
      type : 'radio',
      label : 'Category1',
      value : 'category1'
    });

    categoryAlert.addButton({
      text : 'Load Default',
      handler : data =>{
        this.categoryChoice = data;
        let makeDiet= setTimeout(()=>{
          this.update=true;
        },2000);
        this.loadDietFor(this.categoryChoice);
      }
    });

    this.nav.present(categoryAlert);
  }

  loadDietFor(categoryName){
    Stamplay.Object("usercategories").get({name : categoryName}).then((res)=>{
      let categoryid = res.data[0]._id;

      Stamplay.Object("perdaydiet").get({ categoryFor : categoryid}).then((res)=>{
        this.dayresdata = res.data;

      });
    })
  }

  showmealsOf(day){
    let loadmeal = setTimeout(()=>{
      this.openmeals = true;
    }, 2000);
    let mealid = day.meals[0];
    Stamplay.Object("dietplans").get({ _id : mealid}).then((mealres=>{
      let breakfastId = mealres.data[0].breakfastItems[0];
      let lunchId = mealres.data[0].lunchItems[0];
      let dinnerId = mealres.data[0].dinnerItems[0];
      Stamplay.Object("items").get({_id : breakfastId}).then((res)=>{
        this.itemresdata = res.data;
      });
    }))
  }
}
