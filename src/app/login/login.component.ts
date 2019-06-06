import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user/user.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }




  onSubmit(form : NgForm){
    if(form.value.email.match("admin@admin.com" )!==null && form.value.password.match("admin@123" )!==null){
      this.router.navigateByUrl('/adminDash');
    }else{
      console.log()
      this.userService.login(form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('/userprofile');
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }

  }


}
