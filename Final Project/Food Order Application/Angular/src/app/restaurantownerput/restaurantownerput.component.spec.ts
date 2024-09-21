import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantownerputComponent } from './restaurantownerput.component';

describe('RestaurantownerputComponent', () => {
  let component: RestaurantownerputComponent;
  let fixture: ComponentFixture<RestaurantownerputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantownerputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantownerputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
