import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'Test recipe description 1', 'http://lorempixel.com/360/290/'),
    new Recipe('A test recipe 2', 'Test recipe description 2', 'http://lorempixel.com/360/300/')
  ];
  @Output() recipeListSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeListSelected.emit(recipe);
  }

}
