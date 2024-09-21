import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverystaffdeleteComponent } from './deliverystaffdelete.component';

describe('DeliverystaffdeleteComponent', () => {
  let component: DeliverystaffdeleteComponent;
  let fixture: ComponentFixture<DeliverystaffdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverystaffdeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverystaffdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
