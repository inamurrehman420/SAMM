import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentComponent } from './appointments.component';

describe('DashboardComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentComponent]
    });
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
