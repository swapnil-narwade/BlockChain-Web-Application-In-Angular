import { TestBed, inject } from '@angular/core/testing';

import { BlockchainAPIserviceService } from './blockchain-apiservice.service';

describe('BlockchainAPIserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockchainAPIserviceService]
    });
  });

  it('should be created', inject([BlockchainAPIserviceService], (service: BlockchainAPIserviceService) => {
    expect(service).toBeTruthy();
  }));
});
