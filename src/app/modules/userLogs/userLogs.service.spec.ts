import { TestBed } from '@angular/core/testing';
import { UserLogsService } from './userLogs.service';



describe('UserLogsService', () => {
  let service: UserLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
