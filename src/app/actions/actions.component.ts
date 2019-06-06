import {Component, OnInit, OnDestroy} from '@angular/core';
import { FeedbackService } from '../feedbacks/feedback.service';
import { Feedback } from '../feedbacks/feedback.model';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
  })
  export class ActionsComponent implements OnInit,OnDestroy{
  
    feeds:Feedback[]=[];
    subscription:Subscription; 
    constructor(private feedService:FeedbackService){}
   
    ngOnInit() {
    
      this.feedService.getFeeds();
      this.subscription=this.feedService.feedsChanged
      .subscribe((feeds:Feedback[])=>{
        this.feeds=feeds;
      });
      console.log(this.feeds);
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
  
    }
   
  }
  