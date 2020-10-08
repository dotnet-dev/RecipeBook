import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato',10)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient)
  {
    this.ingredients.push(ingredient);     
  }
}
