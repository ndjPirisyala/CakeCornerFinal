import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedCakeViewComponent } from './customized-cake-view.component';

describe('CustomizedCakeViewComponent', () => {
  let component: CustomizedCakeViewComponent;
  let fixture: ComponentFixture<CustomizedCakeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedCakeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedCakeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
