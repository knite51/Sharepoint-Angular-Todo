import { TestBed, inject } from '@angular/core/testing';

import { AuthCurdServiceService } from './auth-curd-service.service';

describe('AuthCurdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCurdServiceService]
    });
  });

  it('should be created', inject([AuthCurdServiceService], (service: AuthCurdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
