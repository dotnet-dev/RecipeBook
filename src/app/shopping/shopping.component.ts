import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredients.model';
import { ShoppingListService } from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients : Ingredient[];  
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredient();
    this.shoppinglistservice.ingredientChanged.subscribe(
      (ingredients : Ingredient[]) => {this.ingredients = ingredients
      }
    );
  } 
}
