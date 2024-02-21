import { Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeComponent } from './recipe/recipe.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipe',
        pathMatch: 'full',
      },
      {
        path: 'ingredients',
        component: IngredientsComponent,
      },
      {
        path: 'recipe',
        component: RecipeComponent,
      },

      { path: '**', component: NotFoundComponent }

    ];
