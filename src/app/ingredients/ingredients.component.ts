import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MOCK_INGREDIENTS } from './ingredients.MOCK';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent {
  
  ingredients: Ingredient[] = MOCK_INGREDIENTS;

  testIngredients = [
    {id: 0, testIngredient: 'Pepper'},
    {id: 1, testIngredient: 'Salt'},
    {id: 2, testIngredient: 'Paprika'}
  ];  

  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];

}
