import {Recipie} from './recipie.model'
import {Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipieService{

  recipiesChanged =  new Subject<Recipie[]>(); 

     

    private  recipies: Recipie[] = [
        new Recipie('A Test Recipie' 
        , 'This is a simple test ',
        'https://image.freepik.com/free-vector/best-recipes-logo-with-yellow-pan_23-2147492924.jpg',
        
        [
            new  Ingredient('Meat' , 1),
            new Ingredient('french fries' , 2)
        ]) , 

        new Recipie('A Test Recipie' 
        , 'This is a simple test ',
        'https://i.pinimg.com/originals/98/cf/72/98cf72d0a15d4ad7f7e8e584a3d3bd4e.png',
        
        [
            new  Ingredient('bread' , 2),
        ]) 
      ];

      constructor(private slService: ShoppingListService){}

      getRecipies() {
          return this.recipies.slice();
      }

      addIngredientsToShoppingList(ingridients: Ingredient[]){

        this.slService.addIngredients(ingridients);
      }

      getRecipie(index: number){

        return this.recipies[index];
      }

      addRecipie(recipie: Recipie){

          this.recipies.push(recipie);
          this.recipiesChanged.next(this.recipies.slice());
      }

      updateRecipie(index:number , newRecipie:Recipie){

        this.recipies[index] = newRecipie;
        this.recipiesChanged.next(this.recipies.slice());
      }

      deleteRecipie(index: number){
        this.recipies.splice(index,1);
        this.recipiesChanged.next(this.recipies.slice());
      }
}