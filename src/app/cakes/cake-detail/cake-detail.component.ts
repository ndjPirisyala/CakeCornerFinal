import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake.model';
import { CakeService } from '../cake.service';
import { ActivatedRoute, Params, Router,ParamMap } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  cake:Cake;
  id:string;
  cakes:Cake[];
  constructor(private cakeService:CakeService,
  private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params:Params)=>{
    //     this.id = params['id'];
    //       this.cakeService.getCake(this.id)
    //       this.cakeService.cakeSelected.subscribe((cakeData:Cake)=>{
    //       this.cake=cakeData;
    //       console.log(this.cake);
    //     });
        
        
    //    }
    //  );
   

    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('id')){
        this.id=paramMap.get("id");
        this.cake=this.cakeService.getCake(this.id);
        // this.cakeService.getCake1(this.id);
        //  this.cakeService.cakeSelected.subscribe(cakeData=>{
        //    this.cake={id:cakeData._id,name:cakeData.name,category:cakeData.category,price:cakeData.price,imagePath:cakeData.imagePath,description:cakeData.description,features:cakeData.features};
        //  });
       
        //this.cakeService.getCake(this.id);
        //this.cakeService.cakeSelected.subscribe((cakeData:Cake)=>{
          //this.cake=cakeData;
       // });


      }
    });
  }

  onEditCake(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteCake(){
    console.log(this.id);
    this.cakeService.deleteCake(this.id);
    this.router.navigate(['adminDash/cakes']);
  }

  

}
