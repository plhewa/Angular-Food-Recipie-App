import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReciepiesComponent } from './reciepies/reciepies.component';
import { RecipieDetailsComponent } from './reciepies/recipie-details/recipie-details.component';
import { RecipieListComponent } from './reciepies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './reciepies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeadersComponent } from './headers/headers.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {DropdownDirective} from '../app/shared/dropdown.directive';
import {ShoppingListService} from '../app/shopping-list/shopping-list-service'
import {AppRoutingModule} from './app-routing.module';
import { RecipiesStartComponent } from './reciepies/recipies-start/recipies-start.component';
import { RecipiesEditComponent } from './reciepies/recipies-edit/recipies-edit.component'
import { RecipieService } from './reciepies/recipie-service';

@NgModule({
  declarations: [
    AppComponent,
    ReciepiesComponent,
    RecipieDetailsComponent,
    RecipieListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    HeadersComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipiesStartComponent,
    RecipiesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
