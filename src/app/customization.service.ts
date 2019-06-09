import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {

  constructor(private http: HttpClient) { }

  private selectedSize: string;
  private selectedShape: string;
  private selectedFlavour: string;

  private selectedFrosting: string;
  private selectedTopping: string;

  public getSize(): string{
    return this.selectedSize;
  }
  public getShape(): string{
    return this.selectedShape;
  }
  public getFlavour(): string{
    return this.selectedFlavour;
  }

  public getFrosting(): string{
    return this.selectedFrosting;
  }

  public getTopping(): string{
    return this.selectedTopping;
  }

  public setSize(size: string): null{
    this.selectedSize = size;
    return null;
  }
  public setShape(shape: string): null{
    this.selectedShape = shape;
    return null;
  }
  public setFlavour(flavour: string): null{
    this.selectedFlavour = flavour;
    return null;
  }

  public setFrosting(frosting: string): null{
    this.selectedFrosting = frosting;
    return null;
  }

  public setTopping(topping: string): null{
    this.selectedTopping = topping;
    return null;
  }
}
