import { TestBed, inject } from '@angular/core/testing';

import { BandsService } from './bands.service';

describe('BandsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandsService]
    });
  });

  it('should be created', inject([BandsService], (service: BandsService) => {
    expect(service).toBeTruthy();
  }));
});
