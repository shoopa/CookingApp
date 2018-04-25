import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Super tasty Schnitzel.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1280px-Wiener-Schnitzel02.jpg', [
        new Ingredient('Meat', 1)
      ]),
    new Recipe('Big Fat Burger', 'What else do you need?',
      'http://getbento.imgix.net/accounts/236fb3743b9522eafb90c6d2d20b8115/media/images/23357Tasty-Big_Tasty.JPG?w=1800&fit=max&auto=compress,format&h=1800', [
        new Ingredient('Pattie', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
