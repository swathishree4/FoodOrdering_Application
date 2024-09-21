import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdergetComponent } from './orderget.component';

describe('OrdergetComponent', () => {
  let component: OrdergetComponent;
  let fixture: ComponentFixture<OrdergetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdergetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdergetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
