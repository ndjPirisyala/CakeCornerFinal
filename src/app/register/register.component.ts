import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { UserService } from '../user/user.service'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage:boolean;
  serverErrorMessages:string;
  registerForm: FormGroup;
  submitted = false;


  constructor(private userService: UserService,private formBuilder: FormBuilder,private router : Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.userService.postUser(form.value).subscribe(
      res => {
        this.submitted = false;
        this.showSuccessMessage=true;
        setTimeout(() =>this.showSuccessMessage=false,4000);
        this.resetForm(form);
        //this.router.navigateByUrl('/userprofile');
      },
      err => {
        if(err.status === 422){
          //this.serverErrorMessages=err.error.join('<br/>');
        }
        else{
          this.serverErrorMessages='Something went wrong,Please contact admin.';
        }
      }
    );

    // stop here if form is invalid



}
resetForm(registerForm) {
  this.userService.selectedUser = {
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''
    //role:''
};
  registerForm.resetForm();
  //this.serverErrorMessages='';
}

}
