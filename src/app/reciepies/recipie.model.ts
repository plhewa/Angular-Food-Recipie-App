import { Ingredient } from '../shared/ingridient.model';

export class Recipie{
    public name: string;
    public descrption: string;
    public imagePath: string;
    public ingredients : Ingredient[];

    constructor(name:string ,descrption: string ,imagePath: string , ingrdients: Ingredient[]){
        this.name = name;
        this.descrption = descrption;
        this.imagePath = imagePath;
        this.ingredients = ingrdients;
    }
}