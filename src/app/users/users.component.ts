import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {UsermanageService} from './usermanage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private bs: UsermanageService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);
  }

  
  ngOnInit() {
  }
}


