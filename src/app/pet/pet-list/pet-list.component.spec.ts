import { async, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { MaterialModule } from '../../material/material.module';
import { PetService } from '../pet.service';
import { AlertService } from '../../alert/alert.service';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let petService: PetService;
  let alertService: AlertService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ PetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new PetListComponent(petService, alertService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
