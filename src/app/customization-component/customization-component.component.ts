import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';

@Component({
  selector: 'app-customization-component',
  templateUrl: './customization-component.component.html',
  styleUrls: ['./customization-component.component.css']
})
export class CustomizationComponentComponent implements OnInit {

  constructor( private data: CustomizationService) { }

  cakeName = 'Test Cake';
  private selectedSize: string;
  private selectedShape: string;
  private selectedFlavour: string;

  ngOnInit() {
  }

  public sSize(size: string): null {
    console.log(size);
    this.selectedSize = size;
    return null;
    }

  public sShape(shape: string): null {
    console.log(shape);
    this.selectedShape = shape;
    return null;
      }

  public sFlavour(flavour: string): null {
    console.log(flavour);
    this.selectedFlavour = flavour;
    return null;
      }

 onClickView(){
  this.data.setSize(this.selectedSize);
  this.data.setShape(this.selectedShape);
  this.data.setFlavour(this.selectedFlavour);
 }
}
