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

}
