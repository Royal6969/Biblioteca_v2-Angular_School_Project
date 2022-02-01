import { TestBed } from '@angular/core/testing';

import { EffectLoaderService } from './effect-loader.service';

describe('EffectLoaderService', () => {
  let service: EffectLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
