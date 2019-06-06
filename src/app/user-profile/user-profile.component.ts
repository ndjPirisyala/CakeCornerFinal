import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.users = res['user'];
      },
      err => {
        console.log(err);

      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
