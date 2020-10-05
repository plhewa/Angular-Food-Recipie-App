import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipieService } from '../recipie-service';
import { Recipie } from '../recipie.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipies-edit',
  templateUrl: './recipies-edit.component.html',
  styleUrls: ['./recipies-edit.component.css']
})
export class RecipiesEditComponent implements OnInit, OnDestroy {

  recipies:Recipie[];
  subscription:Subscription;

  id : number;
  editMode = false;
  recipieForm: FormGroup;

  constructor(private route:ActivatedRoute,
    private recipieService : RecipieService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.subscription = this.route.params
      .subscribe(
        (params : Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          
        } 
      );

  }

  onSubmit() {
    
    if(this.editMode){
      this.recipieService.updateRecipie(this.id,this.recipieForm.value);
    } else{
      this.recipieService.addRecipie(this.recipieForm.value);
    }

    this.onCancel();
    
  }


  get controls() { // a getter!
    return (<FormArray>this.recipieForm.get('ingredients')).controls;
  }


  onAddIngredient(){

    (<FormArray>this.recipieForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]) 
        
      })
    );

  }



  private initForm() {

    let recipeName = '';
    let recipieImagePath = '';
    let recipieDescription = '';
    let recipieIngridients = new FormArray([]);

    if(this.editMode){
      const recipie = this.recipieService.getRecipie(this.id);
      recipeName = recipie.name;
      recipieImagePath = recipie.imagePath;
      recipieDescription = recipie.descrption;

      if(recipie['ingredients']){

        for (let ingredient of recipie.ingredients){
          recipieIngridients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,
                [Validators.required,
                 Validators.pattern(/^[1-9]+[0-9]*$/)             
                ])
            })
          )
        }
      }

    }

    this.recipieForm = new FormGroup({

      'name': new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipieImagePath,Validators.required),
      'description' : new FormControl(recipieDescription,Validators.required),
      'ingredients' : recipieIngridients

    })
  }


  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route})
  }


  onDeleteIngredient(index:number){

    (<FormArray>this.recipieForm.get('ingredients')).removeAt(index);
  }

  ngOnDestroy() { 

    this.subscription.unsubscribe();
    
  }
}
