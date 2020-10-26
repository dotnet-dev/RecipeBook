import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredients.model';
import { ShoppingListService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistservice.startedEditing.
      subscribe(
        (index: number) => {
          console.log(index);
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppinglistservice.getIngredients(index);
          this.slform.setValue(
            {
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          )
        }
      );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistservice.updateIngredients(this.editedItemIndex, ingredient)
    }
    else {
      this.shoppinglistservice.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear()
  {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete()
  {
    this.shoppinglistservice.deleteIngredients(this.editedItemIndex);
    this.onClear();    
  }
}
