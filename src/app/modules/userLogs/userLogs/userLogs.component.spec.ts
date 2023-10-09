import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserLogsComponent } from './userLogs.component';



describe('UserLogsComponent', () => {
  let component: UserLogsComponent;
  let fixture: ComponentFixture<UserLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLogsComponent]
    });
    fixture = TestBed.createComponent(UserLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
