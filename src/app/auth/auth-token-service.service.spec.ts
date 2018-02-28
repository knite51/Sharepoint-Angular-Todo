import { TestBed, inject } from '@angular/core/testing';

import { AuthTokenServiceService } from './auth-token-service.service';

describe('AuthTokenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenServiceService]
    });
  });

  it('should be created', inject([AuthTokenServiceService], (service: AuthTokenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
