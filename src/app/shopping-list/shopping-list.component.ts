import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingridient.model'
import { ShoppingListService } from './shopping-list-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients  : Ingredient[];

  private igChangedSub:Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {

    this.ingredients = this.slService.getIngridients();
    this.igChangedSub = this.slService.ingidientsChanged
      .subscribe(
        (ingredients : Ingredient[]) => {
          this.ingredients = ingredients;
        } 
      ); 

  }

  onEditItem(index:number){

    this.slService.startedEditing.next(index);

  }

  ngOnDestroy() : void {
    this.igChangedSub.unsubscribe();
  }

 

}
