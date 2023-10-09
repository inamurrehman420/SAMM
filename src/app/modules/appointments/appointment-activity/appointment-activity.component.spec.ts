import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentActivityComponent } from './appointment-activity.component';

describe('AppointmentActivityComponent', () => {
  let component: AppointmentActivityComponent;
  let fixture: ComponentFixture<AppointmentActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
