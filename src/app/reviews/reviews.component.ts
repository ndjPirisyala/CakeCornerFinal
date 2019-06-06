import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Feedback } from '../feedbacks/feedback.model';
import { FeedbackService } from '../feedbacks/feedback.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  feedForm:FormGroup;

  constructor(private feedService:FeedbackService) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    const newFeed=new Feedback(null,this.feedForm.value['name'],this.feedForm.value['email'],this.feedForm.value['message']);
    console.log(newFeed);
    this.feedService.addFeed(newFeed);
  }

  private initForm(){
    this.feedForm=new FormGroup({
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'message':new FormControl('',Validators.required)
    });
  }

}
