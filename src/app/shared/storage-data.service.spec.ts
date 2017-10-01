import { TestBed, inject } from '@angular/core/testing';

import { StorageDataService } from './storage-data.service';

describe('StorageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageDataService]
    });
  });

  it('should be created', inject([StorageDataService], (service: StorageDataService) => {
    expect(service).toBeTruthy();
  }));
});
