import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadcartComponent } from './loadcart.component';

describe('LoadcartComponent', () => {
  let component: LoadcartComponent;
  let fixture: ComponentFixture<LoadcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadcartComponent]
    });
    fixture = TestBed.createComponent(LoadcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
