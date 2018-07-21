import { async, TestBed } from '@angular/core/testing';

import { AddPetComponent } from './add-pet.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { PetService } from '../pet.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';

describe('AddPetComponent', () => {
  let component: AddPetComponent;
  let petService: PetService;
  let alertService: AlertService;
  let formBuilder: FormBuilder;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule, MaterialModule ],
      declarations: [ AddPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    formBuilder = new FormBuilder();
    alertService = new AlertService();
    component = new AddPetComponent(formBuilder, petService, alertService, router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
