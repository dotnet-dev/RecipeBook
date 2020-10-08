export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public iD: number;
  
    constructor(name: string, desc: string, imagepath: string , id: number){
      this.name = name;
      this.description = desc;
      this.imagePath = imagepath;
      this.iD = id;
    }
  
  }
  