import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReciepiesComponent} from '../app/reciepies/reciepies.component'
import {ShoppingListComponent } from '../app/shopping-list/shopping-list.component'
import { RecipiesStartComponent } from './reciepies/recipies-start/recipies-start.component';
import { RecipieDetailsComponent } from './reciepies/recipie-details/recipie-details.component';
import { RecipiesEditComponent } from './reciepies/recipies-edit/recipies-edit.component';


const appRoutes:Routes = [
    {path: '' , redirectTo: '/recipies',pathMatch: 'full'},
    {path: 'recipies' , component:ReciepiesComponent, children: [
       
    ] },
    {path: 'shopping-list' , component:ShoppingListComponent },
    
];


@NgModule({

    imports: [RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}