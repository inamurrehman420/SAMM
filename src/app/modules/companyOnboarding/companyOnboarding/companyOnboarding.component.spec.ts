import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyOnboardingComponent } from './companyOnboarding.component';


describe('CompanyOnboardingComponent', () => {
  let component: CompanyOnboardingComponent;
  let fixture: ComponentFixture<CompanyOnboardingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyOnboardingComponent]
    });
    fixture = TestBed.createComponent(CompanyOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
