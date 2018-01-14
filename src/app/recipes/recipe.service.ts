import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'ARTICHOKE HUMMUS',
            'Hummus hummus hummus hummus',
            'http://pinchmysalt.com/wp-content/uploads/2009/06/img_5498-version-2.jpg',
            [
                new Ingredient('Garbanzo beans', 1),
                new Ingredient('Artichoke', 6),
                new Ingredient('Sesame seed paste', 2),
                new Ingredient('Lemon', 1),
            ]
        ),
        new Recipe(
            'CLASSIC DEVILED EGGS',
            'Fourth of July is quickly approaching.',
            'http://pinchmysalt.com/wp-content/uploads/2008/06/Classic-Deviled-Eggs-2.jpg',
            [
                new Ingredient('Artichoke', 6),
                new Ingredient('Sesame seed paste', 2),
                new Ingredient('Lemon', 1),
            ],
        )
    ];

    getRecipe(id: number) {
        return this.recipes[id];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
