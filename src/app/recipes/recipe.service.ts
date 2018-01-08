import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class RecipeService {

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
}
