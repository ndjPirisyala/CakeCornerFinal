import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeToppingComponent } from './customize-topping.component';

describe('CustomizeToppingComponent', () => {
  let component: CustomizeToppingComponent;
  let fixture: ComponentFixture<CustomizeToppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeToppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeToppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
