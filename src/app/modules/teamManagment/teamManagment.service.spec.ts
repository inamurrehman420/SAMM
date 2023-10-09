import { TestBed } from '@angular/core/testing';
import { TeamManagmentService } from './teamManagment.service';



describe('TeamManagmentService', () => {
  let service: TeamManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
