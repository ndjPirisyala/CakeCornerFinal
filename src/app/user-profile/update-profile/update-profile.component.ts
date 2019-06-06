import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  users: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs:UserService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      fullName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]

      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
        const user={
          "_id":params['id']
        }
        this.bs.editBusiness(user).subscribe(res => {
          this.users = res;
          console.log(res);
      });
    });
  }


}
