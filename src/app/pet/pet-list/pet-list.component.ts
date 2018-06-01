import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { Subscription } from 'rxjs';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  subscription = new Subscription;

  constructor(
    private petService: PetService
  ) { }

  ngOnInit() {
    this.subscription = this.petService.getAll()
      .subscribe((data: Pet[]) => {
        this.pets = data;
      }, err => {
        console.log(err);
      });
  }

}
