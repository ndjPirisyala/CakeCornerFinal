
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import { Http} from '@angular/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'auto'
  };

  stripeTest: FormGroup;

  constructor(
  private http : Http,
    private fb: FormBuilder,
    private router:Router,
    private stripeService: StripeService) {}

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
      email:['', [Validators.required]]

    });
    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#3498db',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    const email=this.stripeTest.get('email').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(obj => {
        if (obj) {
          console.log("Token is --> ",obj.token.id);

this.http.post("http://localhost:3000/payme",{
  token : obj.token.id
}).subscribe(
(res)=>{
  console.log("The response from server is ",res);
  console.log('Payment Done');
  this.router.navigate(['home/men/payment/paymentsuccess'])
},
(err)=>{
  console.log('The error is ',err)
})


        } else  {
          // Error creating the token
          console.log("Error comes ");
        }
      });





  }
}
