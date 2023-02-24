import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppShowComponent } from './admin-app-show.component';

describe('AdminAppShowComponent', () => {
  let component: AdminAppShowComponent;
  let fixture: ComponentFixture<AdminAppShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
