import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystaffgetComponent } from './deliverystaffget.component';

describe('DeliverystaffgetComponent', () => {
  let component: DeliverystaffgetComponent;
  let fixture: ComponentFixture<DeliverystaffgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverystaffgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverystaffgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
