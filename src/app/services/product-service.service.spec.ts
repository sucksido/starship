import { TestBed } from '@angular/core/testing';
import { StarshipService } from '../services/starship.service';

describe('ProductService', () => {
  let service: StarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
