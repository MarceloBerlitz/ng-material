import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetService } from './pet.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [PetListComponent, AddPetComponent],
  providers:[PetService]
})
export class PetModule { }
