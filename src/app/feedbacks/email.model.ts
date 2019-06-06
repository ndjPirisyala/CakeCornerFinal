export class Email{
    public id:string;
    public to:string;
    public subject:string;
    public message:string;
   
    
    constructor(id:string,to:string,
       subject:string,msg:string
      
   ){
       this.id=id;
       this.to=to;
       this.subject=subject;
       this.message=msg;
      
    }
}