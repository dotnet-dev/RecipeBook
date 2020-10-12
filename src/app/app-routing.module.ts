import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const appRoute: Routes = [
    {path: '', redirectTo: '/recipes' , pathMatch:'full'},
    {path: 'recipes', component: RecipesComponent , children:[
        {path: '', component: RecipesStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},       
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingComponent},
];

@NgModule(
    {
        imports: [RouterModule.forRoot(appRoute)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule
{

}