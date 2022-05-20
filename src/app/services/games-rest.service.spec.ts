import { TestBed } from '@angular/core/testing';

import { GamesRESTService } from './games-rest.service';

describe('GamesRESTService', () => {
  let service: GamesRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
