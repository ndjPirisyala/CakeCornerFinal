import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customization-admin',
  templateUrl: './customization-admin.component.html',
  styleUrls: ['./customization-admin.component.css']
})
export class CustomizationAdminComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  private selectedType: string;
  private a_choco = 'False';
  private a_van = 'False';
  private a_redv = 'False';
  private number: string;
  private name: string;
  private price: string;
  private url: string;
  private description: string;

  ngOnInit() {
  }

  public sType(type: string): null {
    console.log(type);
    this.selectedType = type;
    return null;
    }

  public sChoco(): null {
    if (this.a_choco === 'False') {
      this.a_choco = 'True';
    } else if (this.a_choco === 'True') {
      this.a_choco = 'False';
    }
    console.log(this.a_choco);
    return null;
    }

  public sVan(): null {
    if (this.a_van === 'False') {
      this.a_van = 'True';
    } else if (this.a_van === 'True') {
      this.a_van = 'False';
    }
    console.log(this.a_van);
    return null;
   }

  public sRedV(): null {
    if (this.a_redv === 'False') {
      this.a_redv = 'True';
    } else if (this.a_redv === 'True') {
      this.a_redv = 'False';
    }
    console.log(this.a_redv);
    return null;
    }

    public onClickSubmit(): null {
      this.number = (<HTMLInputElement>document.getElementById("number")).value;
      this.name = (<HTMLInputElement>document.getElementById("name")).value;
      this.price = (<HTMLInputElement>document.getElementById("price")).value;
      this.url = (<HTMLInputElement>document.getElementById("url")).value;
      this.description = (<HTMLInputElement>document.getElementById("description")).value;

      const ParseHeaders = {
        headers: new HttpHeaders({
         'Content-Type'  : 'application/json'
        })
       };

      const formData = 'id=' + this.number +
                      '&name=' + this.name +
                      '&choco=' + this.a_choco +
                      '&van=' + this.a_van +
                      '&redv=' + this.a_redv +
                      '&price=' + this.price +
                      '&url=' + this.url +
                      '&dec=' + this.description;

      console.log(formData);

      if (this.selectedType === 'Frosting') {
          this.http.post('http://localhost:3030/insertFros?', formData, ParseHeaders).subscribe((res) => {
            console.log(res);
          });

       }

      if (this.selectedType === 'Topping') {
        this.http.post('http://localhost:3030/insertTop?', formData, ParseHeaders).subscribe((res) => {
          console.log(res);
        });

     }
      return null;
      }

}
