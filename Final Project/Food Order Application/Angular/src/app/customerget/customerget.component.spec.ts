import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergetComponent } from './customerget.component';

describe('CustomergetComponent', () => {
  let component: CustomergetComponent;
  let fixture: ComponentFixture<CustomergetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomergetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomergetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
