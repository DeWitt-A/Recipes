import { Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ingredients',
        pathMatch: 'full',
      },{
        path: 'ingredients',
        component: IngredientsComponent,
      }
];
