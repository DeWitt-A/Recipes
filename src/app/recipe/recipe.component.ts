import { Component } from '@angular/core';
import { Recipe } from './recipe';
import { MOCK_RECIPE } from './recipe.MOCK';
import { IngredientsComponent } from "../ingredients/ingredients.component";

@Component({
    selector: 'app-recipe',
    standalone: true,
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.css',
    imports: [IngredientsComponent]
})
export class RecipeComponent {
    recipe: Recipe = MOCK_RECIPE;
}
