import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationAdminComponent } from './customization-admin.component';

describe('CustomizationAdminComponent', () => {
  let component: CustomizationAdminComponent;
  let fixture: ComponentFixture<CustomizationAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizationAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
