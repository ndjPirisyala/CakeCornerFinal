import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';


@Component({
  selector: 'app-customize-frostop',
  templateUrl: './customize-frostop.component.html',
  styleUrls: ['./customize-frostop.component.css']
})
export class CustomizeFrostopComponent implements OnInit {

  constructor( private data: CustomizationService ) { }

  ngOnInit() {
  }

  private selectedFrosting: string;
  private selectedTopping: string;


}
