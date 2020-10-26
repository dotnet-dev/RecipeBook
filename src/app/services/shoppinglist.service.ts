import { LoggingService } from './logging.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';
import { Subject } from 'rxjs';

//@Injectable()
export class ShoppingListService {
  // constructor(private loggingService: LoggingService){}
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  getIngredients(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());    
  }

  updateIngredient(name: string, updatedamount: number) {
    const newingredeint = new Ingredient(name, updatedamount);
    const selectedingr = this.ingredients.find((cat) => cat.name === name);
    const index = this.ingredients.indexOf(selectedingr);
    this.ingredients.splice(index, 1);
    this.ingredients.push(newingredeint);
  }

  updateIngredients(index: number , newingre : Ingredient)
  {
    this.ingredients[index] = newingre;   
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredients(index: number)
  {
    this.ingredients.splice(index, 1)
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
