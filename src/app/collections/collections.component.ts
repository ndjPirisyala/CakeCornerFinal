import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent implements OnInit {

  prices:string[];
totalprice:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.prices=[];
  }

  onCheckout(){
    this.router.navigate(['payment']);

  }
  onClick(){
   // this.router.navigate(['home/men/payment']);
    this.prices.push('$67');
    this.totalprice='Total Price:'

  }
  onClicks(){
    // this.router.navigate(['home/men/payment']);
     this.prices.push('$57');

   }
   onClickss(){
    // this.router.navigate(['home/men/payment']);
     this.prices.push('$87');

   }

}
