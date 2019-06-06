import {Component} from '@angular/core';

@Component({
    selector: 'app-admindash',
    templateUrl: './adminDash.component.html',
    styleUrls: ['./adminDash.component.css']
  })
  export class AdminDashComponent {
      loadedAction='cakes';
      onNavigate(action:string){
          this.loadedAction=action;
      }
  }
