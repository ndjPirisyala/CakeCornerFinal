import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFrostingComponent } from './customize-frosting.component';

describe('CustomizeFrostingComponent', () => {
  let component: CustomizeFrostingComponent;
  let fixture: ComponentFixture<CustomizeFrostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeFrostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeFrostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
