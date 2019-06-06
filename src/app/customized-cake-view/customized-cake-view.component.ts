import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customized-cake-view',
  templateUrl: './customized-cake-view.component.html',
  styleUrls: ['./customized-cake-view.component.css']
})
export class CustomizedCakeViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cake_name:string="Test Cake"

}
