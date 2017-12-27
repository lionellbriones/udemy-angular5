import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(event, nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    event.preventDefault();
    const ingredient = new Ingredient(nameInput.value, parseInt(amountInput.value, 10));
    this.ingredientAdded.emit(ingredient);
  }

}
