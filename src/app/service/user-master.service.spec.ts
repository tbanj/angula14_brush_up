import { TestBed } from '@angular/core/testing';

import { UserMasterService } from './user-master.service';

describe('UserMasterService', () => {
  let service: UserMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
