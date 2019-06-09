import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';
import { HttpClient} from '@angular/common/http';
import { NotifierService } from 'angular-notifier';

import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

@Component({
  selector: 'app-customize-frosting',
  templateUrl: './customize-frosting.component.html',
  styleUrls: ['./customize-frosting.component.css'],
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
export class CustomizeFrostingComponent implements OnInit {

  private readonly notifier: NotifierService;

  constructor( private data: CustomizationService, private http: HttpClient, notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

  private selectedFlavour = this.data.getFlavour();
  private selectedFrosting: string;

  animationState: string;
  frosArr: any;

  ngOnInit() {
    if (this.selectedFlavour === 'Chocolate') {
      this.http.get('http://localhost:3030/getFrosChoco').subscribe((data) =>  this.frosArr = data ); }
    if (this.selectedFlavour === 'Vanilla') {
      this.http.get('http://localhost:3030/getFrosVan').subscribe((data) =>  this.frosArr = data ); }
    if (this.selectedFlavour === 'Red Velvet') {
      this.http.get('http://localhost:3030/getFrosRedv').subscribe((data) =>  this.frosArr = data ); }
    console.log(this.frosArr);
  }

  public sFrosting(frosting: string): null {
    console.log(frosting);
    this.selectedFrosting = frosting;
    this.data.setFrosting(this.selectedFrosting);
    // this.notifier.notify( 'success', 'Great choice! Your frosting is '.concat(frosting) );
    // this.notifier.hideOldest();
    // this.startAnimation('swing');
    return null;
    }

    startAnimation(state) {
      console.log(this.frosArr);
      console.log(state);
      if ( !this.animationState ) {
        this.animationState = state;
      }
    }

    resetAnimationState() {
      this.animationState = '';
    }
}
