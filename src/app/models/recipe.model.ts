import { Ingredient } from './ingredients.model';

export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public iD: number;
    public ingredients: Ingredient[];
  
    constructor(name: string, desc: string, imagepath: string , id: number , ingredients:Ingredient[]){
      this.name = name;
      this.description = desc;
      this.imagePath = imagepath;
      this.iD = id;
      this.ingredients = ingredients;
    }
  
  }
  