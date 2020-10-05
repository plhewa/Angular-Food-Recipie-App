import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipiesStartComponent} from '../reciepies/recipies-start/recipies-start.component';
import {RecipiesEditComponent} from '../reciepies/recipies-edit/recipies-edit.component';
import {RecipieDetailsComponent} from '../reciepies/recipie-details/recipie-details.component';

const routes: Routes = [

  {path:'' , component:RecipiesStartComponent},
  {path:'new', component:RecipiesEditComponent},
  {path:':id', component:RecipieDetailsComponent},
  {path:':id/edit',component:RecipiesEditComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ReciepiesRoutingModule { 



}
