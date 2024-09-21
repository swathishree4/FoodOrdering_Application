import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystaffputComponent } from './deliverystaffput.component';

describe('DeliverystaffputComponent', () => {
  let component: DeliverystaffputComponent;
  let fixture: ComponentFixture<DeliverystaffputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverystaffputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverystaffputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
