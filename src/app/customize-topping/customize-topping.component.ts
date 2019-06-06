import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';
import { HttpClient} from '@angular/common/http';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
@Component({
  selector: 'app-customize-topping',
  templateUrl: './customize-topping.component.html',
  styleUrls: ['./customize-topping.component.css'],
  animations: [
    trigger('cardAnimator', [
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      // transition('* => jello', animate(1000, keyframes(kf.jello))),
      // transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      // transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      // transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      // transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class CustomizeToppingComponent implements OnInit {

  constructor( private data: CustomizationService, private http: HttpClient ) { }

  private selectedSize = this.data.getSize();
  private selectedShape = this.data.getShape();
  private selectedFlavour = this.data.getFlavour();
  private selectedTopping: string;

  animationState: string;

  // public topArr: any[];

  ngOnInit() {
    // if (this.selectedFlavour === 'Chocolate') {
    //   this.http.get('http://localhost:3030/getTopChoco').subscribe((data) => this.topArr[0] = data[0]);
    // }
    // if (this.selectedFlavour === 'Vanilla') {this.http.get('http://localhost:3030/getTopVan').subscribe((data) => console.log(data)); }
    // if (this.selectedFlavour === 'Red Velvet') {this.http.get('http://localhost:3030/getTopRedv').subscribe((data) => console.log(data)); }

    // console.log(this.topArr[0]);
  }

  public sFrosting(topping: string): null {
    console.log(topping);
    this.selectedTopping = topping;
    return null;
    }

  onClickView() {
    this.data.setFrosting(this.selectedTopping);
    }

  startAnimation(state) {
    console.log(state)
    if ( !this.animationState ) {
      this.animationState = state;
    }
  }

  resetAnimationState(){
    this.animationState = '';
  }

}
