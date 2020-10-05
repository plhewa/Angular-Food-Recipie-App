import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list-service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem :Ingredient


  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {

          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngridient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })

        }
      );
  }

  onSubmit(form : NgForm){
     
      const value = form.value;
      const newIngrdient = new Ingredient(value.name,value.amount);

      if(this.editMode){
        this.slService.updateIngredient(this.editedItemIndex , newIngrdient);
      }
      else{
        this.slService.addIngridient(newIngrdient);
      }

      this.editMode = false;
      form.reset();

  }

  onClear(){

    this.slForm.reset();
    this.editMode = false;

  }

  onDelete(){

    this.slService.deleteIngridient(this.editedItemIndex);
    this.onClear();

  }

  ngOnDestroy(){

    
    this.subscription.unsubscribe();

  }

}
