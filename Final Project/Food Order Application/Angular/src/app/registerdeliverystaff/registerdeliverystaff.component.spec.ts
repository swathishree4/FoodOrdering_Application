import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdeliverystaffComponent } from './registerdeliverystaff.component';

describe('RegisterdeliverystaffComponent', () => {
  let component: RegisterdeliverystaffComponent;
  let fixture: ComponentFixture<RegisterdeliverystaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterdeliverystaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterdeliverystaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
