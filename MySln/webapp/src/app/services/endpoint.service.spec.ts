import { TestBed } from '@angular/core/testing';

import { EndpointService } from './endpoint.service';

describe('Endpoint.Service.TsService', () => {
  let service: EndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
