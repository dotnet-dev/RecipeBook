import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredients.model';
import { ShoppingListService } from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor(private shoppinglistservice: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredient();
    this.igChangeSub = this.shoppinglistservice.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number)
  {
    console.log(index);
    this.shoppinglistservice.startedEditing.next(index);
  } 
}
