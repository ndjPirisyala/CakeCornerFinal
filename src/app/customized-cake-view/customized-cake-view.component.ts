import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-customized-cake-view',
  templateUrl: './customized-cake-view.component.html',
  styleUrls: ['./customized-cake-view.component.css']
})
export class CustomizedCakeViewComponent implements OnInit {

  constructor( private data: CustomizationService, private http: HttpClient ) { }

  private selectedSize = this.data.getSize();
  private selectedShape = this.data.getShape();
  private selectedFlavour = this.data.getFlavour();
  private selectedFrosting = this.data.getFrosting();
  private selectedTopping = this.data.getTopping();

  cakeArr: any;

  ngOnInit() {
    this.http.get
    ('http://localhost:3030/getClassicCake?size=' + this.selectedSize +
     '&shape=' + this.selectedShape +
     '&flavour=' + this.selectedFlavour +
     '&frosting=' + this.selectedFrosting +
     '&topping=' + this.selectedTopping).subscribe((data) =>  this.cakeArr = data[0] );
    console.log(this.cakeArr);
  }

}
