import { TestBed, inject } from '@angular/core/testing';

import { PetService } from './pet.service';
import { HttpClientModule } from '@angular/common/http';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PetService]
    });
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));
});
