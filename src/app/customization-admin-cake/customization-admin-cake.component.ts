import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customization-admin-cake',
  templateUrl: './customization-admin-cake.component.html',
  styleUrls: ['./customization-admin-cake.component.css']
})
export class CustomizationAdminCakeComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  frosArr: any;
  topArr: any;

  private selectedShape:string = null;
  private selectedFlavor: string = null;
  private selectedFrosting: string = null;
  private selectedTopping: string = null;
  private p_small: string;
  private p_medium: string;
  private p_large: string;
  private url: string;

  ngOnInit() {
    this.http.get('http://localhost:3030/getFrosting').subscribe((data) =>  this.frosArr = data );
    this.http.get('http://localhost:3030/getTopping').subscribe((data) =>  this.topArr = data );
    // console.log(this.frosArr);
    // console.log(this.topArr);
  }

  public onChangeShape(event): void {
    this.selectedShape = event.target.value;
    console.log(this.selectedShape);
  }

  public onChangeFlavor(event): void {
    this.selectedFlavor = event.target.value;
    console.log(this.selectedFlavor);
  }

  public onChangeFros(event): void {
    this.selectedFrosting = event.target.value;
    console.log(this.selectedFrosting);
  }

  public onChangeTop(event): void {
    this.selectedTopping = event.target.value;
    console.log(this.selectedTopping);
  }

  public onClickSubmit(): null {
    // this.selectedShape = (<HTMLInputElement>document.getElementById("shape")).value;
    // this.selectedFlavor = (<HTMLInputElement>document.getElementById("flavor")).value;

    if (this.selectedShape === null) {
      this.selectedShape = 'Square';
    }

    if (this.selectedFlavor === null) {
      this.selectedFlavor = 'Chocolate';
    }

    if (this.selectedFrosting === null) {
      this.selectedFrosting = this.frosArr[0];
    }

    if (this.selectedTopping === null) {
      this.selectedTopping = this.topArr[0];
    }

    this.p_small = (<HTMLInputElement>document.getElementById("small")).value;
    this.p_medium = (<HTMLInputElement>document.getElementById("medium")).value;
    this.p_large = (<HTMLInputElement>document.getElementById("large")).value;
    this.url = (<HTMLInputElement>document.getElementById("url")).value;

    // console.log(this.p_large);
    // console.log(this.selectedFlavor);
    // console.log(this.selectedShape);
    // console.log(this.selectedFrosting);
    // console.log(this.selectedTopping);
    // console.log(this.p_small);
    // console.log(this.p_medium);
    // console.log(this.url);

    const ParseHeaders = {
      headers: new HttpHeaders({
       'Content-Type'  : 'application/json'
      })
     };

     const formDataSmall = 'size=Small' +
                      '&shape=' + this.selectedShape +
                      '&flavour=' + this.selectedFlavor +
                      '&frosting=' + this.selectedFrosting +
                      '&topping=' + this.selectedTopping +
                      '&pic=' + this.url +
                      '&price=' + this.p_small;


    const formDataMedium = 'size=Medium' +
                      '&shape=' + this.selectedShape +
                      '&flavour=' + this.selectedFlavor +
                      '&frosting=' + this.selectedFrosting +
                      '&topping=' + this.selectedTopping +
                      '&pic=' + this.url +
                      '&price=' + this.p_medium;


    const formDataLarge = 'size=Large' +
                      '&shape=' + this.selectedShape +
                      '&flavour=' + this.selectedFlavor +
                      '&frosting=' + this.selectedFrosting +
                      '&topping=' + this.selectedTopping +
                      '&price=' + this.p_large;

    this.http.post('http://localhost:3030/insertCalssicCake?', formDataSmall, ParseHeaders).subscribe((res) => {console.log(res); });
    this.http.post('http://localhost:3030/insertCalssicCake?', formDataMedium, ParseHeaders).subscribe((res) => {console.log(res); });
    this.http.post('http://localhost:3030/insertCalssicCake?', formDataLarge, ParseHeaders).subscribe((res) => {console.log(res); });



    return null;


  }

}
