import { TestBed } from '@angular/core/testing';

import { ServiceFirebaseService } from './service-firebase.service';

describe('ServiceFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceFirebaseService = TestBed.get(ServiceFirebaseService);
    expect(service).toBeTruthy();
  });
});
