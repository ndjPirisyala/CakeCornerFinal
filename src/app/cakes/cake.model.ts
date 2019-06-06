import { Feature } from '../shared/feature.model';

export class Cake{
     public id:string;
     public name:string;
     public category:string;
     public price:number;
     public imagePath:string;
     public description:string;
     public features:Feature[];

     constructor(id:string,name:string,
        cat:string,prc:number,img:string,desc:string,
        features:Feature[]
    ){
        this.id=id;
        this.name=name;
        this.category=cat;
        this.price=prc;
        this.imagePath=img;
        this.description=desc;
        this.features=features;
     }
}