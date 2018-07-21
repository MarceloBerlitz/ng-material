import { TestBed, inject } from '@angular/core/testing';

import { PetService } from './pet.service';
import { HttpClientModule } from '@angular/common/http';

import { PetServiceFake } from './test/pet.service.fake';

fdescribe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PetService]
    });
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));

  describe('delete', () => {
    it('should have been called', inject([PetService], (service: PetService) => {
      spyOn(service, 'delete').and.callThrough();
      service.delete(PetServiceFake.petExample).subscribe(() => { });
      expect(service.delete).toHaveBeenCalled()
    }))
  });

  describe('getAll', () => {
    it('should have been called', inject([PetService], (service: PetService) => {
      spyOn(service, 'getAll').and.callThrough();
      service.getAll().subscribe(val => val);
      expect(service.getAll).toHaveBeenCalled();
    }))
  }); 

});
