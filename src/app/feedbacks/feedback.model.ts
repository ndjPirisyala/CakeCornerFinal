export class Feedback{
    public id:string;
    public name:string;
    public email:string;
    public message:string;
   
    
    constructor(id:string,name:string,
       email:string,msg:string
      
   ){
       this.id=id;
       this.name=name;
       this.email=email;
       this.message=msg;
      
    }
}