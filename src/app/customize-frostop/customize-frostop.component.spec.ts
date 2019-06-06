import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeShapeComponent } from './customize-shape.component';

describe('CustomizeShapeComponent', () => {
  let component: CustomizeShapeComponent;
  let fixture: ComponentFixture<CustomizeShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
