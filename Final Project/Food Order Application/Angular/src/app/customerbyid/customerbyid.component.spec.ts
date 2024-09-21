import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbyidComponent } from './customerbyid.component';

describe('CustomerbyidComponent', () => {
  let component: CustomerbyidComponent;
  let fixture: ComponentFixture<CustomerbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerbyidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
