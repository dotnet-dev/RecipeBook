import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';

//@Injectable()
export class ShoppingListService 
{
 // constructor(private loggingService: LoggingService){}
 ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
   // this.loggingService.LogtoConsole('Added New ingredient.');
  }

  updateIngredient(name: string, updatedamount: number)
  {
    const newingredeint = new Ingredient(name, updatedamount);
    const selectedingr = this.ingredients.find(cat => cat.name === name);
    const index =  this.ingredients.indexOf(selectedingr);
    this.ingredients.splice(index,1);
    this.ingredients.push(newingredeint);
  }
}
