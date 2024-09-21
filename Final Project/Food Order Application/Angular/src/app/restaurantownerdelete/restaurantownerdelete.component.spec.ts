import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantownerdeleteComponent } from './restaurantownerdelete.component';

describe('RestaurantownerdeleteComponent', () => {
  let component: RestaurantownerdeleteComponent;
  let fixture: ComponentFixture<RestaurantownerdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantownerdeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantownerdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
