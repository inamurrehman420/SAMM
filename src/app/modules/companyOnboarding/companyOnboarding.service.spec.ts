import { TestBed } from '@angular/core/testing';
import { CompanyOnboardingService } from './companyOnboarding.service';



describe('CompanyOnboardingService', () => {
  let service: CompanyOnboardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyOnboardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
