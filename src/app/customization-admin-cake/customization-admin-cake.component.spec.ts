import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationAdminCakeComponent } from './customization-admin-cake.component';

describe('CustomizationAdminCakeComponent', () => {
  let component: CustomizationAdminCakeComponent;
  let fixture: ComponentFixture<CustomizationAdminCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizationAdminCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationAdminCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
