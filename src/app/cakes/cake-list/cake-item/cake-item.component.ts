import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../../cake.model';
import { CakeService } from '../../cake.service';


@Component({
  selector: 'app-cake-item',
  templateUrl: './cake-item.component.html',
  styleUrls: ['./cake-item.component.css']
})
export class CakeItemComponent implements OnInit {
  @Input() cake:Cake;
  @Input() id:string;
 // @Input() index: string;
 constructor(private cakeService:CakeService){}
  
  ngOnInit() {
  }

  onSelected(){
    this.cakeService.cakeSelected.emit(this.cake);
    
  }

  

 

}
