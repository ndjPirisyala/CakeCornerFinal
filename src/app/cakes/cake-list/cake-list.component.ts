import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cake } from '../cake.model';
import { CakeService } from '../cake.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit,OnDestroy {
 
  //cakes:Cake[];
  cakes:Cake[]=[];
  subscription:Subscription; 

  constructor(private cakeService:CakeService,
  private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
    // this.subscription=this.cakeService.cakesChanged
    // .subscribe(
    //   (cakes:Cake[])=>{
    //     this.cakes=this.cakeService.getCakes();
    //   }
    // );
    // this.cakes=this.cakeService.getCakes();

    this.cakeService.getCakes();
    this.subscription=this.cakeService.cakesChanged
    .subscribe((cakes:Cake[])=>{
      this.cakes=cakes;
    });
  }

  onNewCake(){
    this.subscription=this.cakeService.cakesChanged
    .subscribe(
      (cakes:Cake[])=>{
       // this.cakes=this.cakeService.getCakes();
       this.cakes=cakes;
      }
    );
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
