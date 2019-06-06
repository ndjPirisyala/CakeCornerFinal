import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feedback } from './feedback.model';
import { Subscription } from '../../../node_modules/rxjs';
import { FeedbackService } from './feedback.service';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Email } from './email.model';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit,OnDestroy {

  feeds:Feedback[]=[];
  subscription:Subscription; 
  emailForm:FormGroup;
  setMail='';
  constructor(private feedService:FeedbackService) { }

  ngOnInit() {
    this.initForm();   
    this.feedService.getFeeds();
    this.subscription=this.feedService.feedsChanged
    .subscribe((feeds:Feedback[])=>{
      this.feeds=feeds;
    });
    console.log(this.feeds);
  }

  remove(id){
    this.feedService.deleteFeed(id);
  }

  setEmail(email){
    this.setMail=email;
  }

  onSubmit(){
    const mail=new Email(null,this.setMail,this.emailForm.value['subject'],this.emailForm.value['message']);
   
    // let mail={
    //   'to':this.emailForm.value['to'],
    //   'subject':this.emailForm.value['subject'],
    //   'message':this.emailForm.value['message']
    // }
    this.feedService.sendEmail(mail);
    
  }

  private initForm(){
    this.emailForm=new FormGroup({
      'to':new FormControl('',Validators.required),
      'subject':new FormControl('',[Validators.required,Validators.email]),
      'message':new FormControl('',Validators.required)
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
