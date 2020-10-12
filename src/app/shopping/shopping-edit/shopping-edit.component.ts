import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';
import { ShoppingListService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
@ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;


  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem()
  {
    const ingredient = new Ingredient(this.nameInputRef.nativeElement.value , this.amountInputRef.nativeElement.value );
    this.shoppinglistservice.addIngredient(ingredient); 
  }
}
