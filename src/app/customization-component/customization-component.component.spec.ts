import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationComponentComponent } from './customization-component.component';

describe('CustomizationComponentComponent', () => {
  let component: CustomizationComponentComponent;
  let fixture: ComponentFixture<CustomizationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
