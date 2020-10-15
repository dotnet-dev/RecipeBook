import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredients.model';
import { Recipe } from '../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Karai',
      'Chicken, Onions',
      'https://natashaskitchen.com/wp-content/uploads/2020/02/Lemon-Chicken-2.jpg',
      1,
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Pizza',
      'Cheese,Chicken, Onions',
      'https://static.toiimg.com/photo/76481989.cms',
      2,
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]
    ),
    new Recipe(
      'Home Made Coke',
      'Water',
      'https://dynamic.zacdn.com/MgFKU3xW42LicvNbR8WuUTOmNs0=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.ph.zalora.net/p/coke-5381-2112161-1.jpg',
      3,
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
    new Recipe(
      'Mutton karai',
      'Mutton, Yogurt, Onions',
      'https://freshstore.pk/Content/Products/ProductImages/4883/Mutton-Karahi-Special-900gm1.jpg',
      4,
      [new Ingredient('Meat', 1), new Ingredient('Fries', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
