import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantownerComponent } from './restaurantowner.component';

describe('RestaurantownerComponent', () => {
  let component: RestaurantownerComponent;
  let fixture: ComponentFixture<RestaurantownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
