import { Component, OnInit} from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie-service';
import { ActivatedRoute , Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {

   recipie:Recipie;
   id: number;

  constructor(private recipieService: RecipieService
    ,private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(
      (params: Params) => {

        this.id = +params['id'];
        this.recipie = this.recipieService.getRecipie(this.id);

      }
    );

  }

  AddToShoppingList(){
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }

  onEditRecipie(){

    this.router.navigate(['edit'], {relativeTo : this.route});
   // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }

  onDeleteRecipie(){
    this.recipieService.deleteRecipie(this.id);
    this.router.navigate(['/recipies']);
  }



}
