import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplcationStatusComponent } from './loan-applcation-status.component';

describe('LoanApplcationStatusComponent', () => {
  let component: LoanApplcationStatusComponent;
  let fixture: ComponentFixture<LoanApplcationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplcationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanApplcationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
