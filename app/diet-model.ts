export class MealModel{
  constructor(
    public week : number,
    public dayoftheweek: number,
    public mealoftheday : number,
    public itemname : string[],
    public itemquantity: number[],
    public itemmeasurement : string[],
    public proteinpercent: number ,
    public carbpercent: number ,
    public fiberpercent: number)
    {
      this.week = week;
      this.dayoftheweek = dayoftheweek;
      this.mealoftheday = mealoftheday ;
  
      this.proteinpercent= proteinpercent;
      this.carbpercent= carbpercent;
      this.fiberpercent= fiberpercent;
    }

  Meal = {
    week:this.week,
    day : this.dayoftheweek,
    mealnumber : this.mealoftheday,
    items : [{
      name : this.itemname,
      quantity : this.itemquantity,
      measurementIn : this.itemmeasurement,
      itemattributes: {
        proteinpercent : this.proteinpercent,
        carbpercent : this.carbpercent,
        fiberpercent : this.fiberpercent
      }
    }]
  };
}
