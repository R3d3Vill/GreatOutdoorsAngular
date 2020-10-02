import { TestBed } from '@angular/core/testing';

import { WhishlistserviceService } from './whishlistservice.service';

describe('WhishlistserviceService', () => {
  let service: WhishlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhishlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
