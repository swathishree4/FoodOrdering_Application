import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerputComponent } from './customerput.component';

describe('CustomerputComponent', () => {
  let component: CustomerputComponent;
  let fixture: ComponentFixture<CustomerputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
