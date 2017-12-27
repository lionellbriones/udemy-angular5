import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(event, nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    event.preventDefault();
    this.shoppingListService.addIngredient(new Ingredient(nameInput.value, parseInt(amountInput.value, 10)));
  }

}
