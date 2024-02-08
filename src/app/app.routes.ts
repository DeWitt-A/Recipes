import { Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ingredients',
        pathMatch: 'full',
      },
      {
        path: 'ingredients',
        component: IngredientsComponent,
      },
      { path: '**', component: NotFoundComponent }
];
