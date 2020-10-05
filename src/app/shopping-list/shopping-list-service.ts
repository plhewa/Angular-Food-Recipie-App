import {Ingredient} from '../shared/ingridient.model'  
import {Subject} from 'rxjs'

export class ShoppingListService{

    ingidientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients  : Ingredient[] = [

        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
        
    
      ];

      getIngridients(){

        return this.ingredients.slice();

      }

      getIngridient(index:number){

        return this.ingredients[index];
      }

      addIngridient(ingridient: Ingredient){
          this.ingredients.push(ingridient);
          this.ingidientsChanged.next(this.ingredients.slice());
          
      }

      addIngredients(ingredients:Ingredient[]){
     
      this.ingredients.push(...ingredients);
      this.ingidientsChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number , newIngredient: Ingredient){

        this.ingredients[index] = newIngredient;
        this.ingidientsChanged.next(this.ingredients.slice());
      }

      deleteIngridient(index:number){
        this.ingredients.splice(index,1);
        this.ingidientsChanged.next(this.ingredients.slice());
      }
}