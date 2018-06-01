import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { Subscription } from 'rxjs';
import { PetService } from '../pet.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[] = [];
  subscriptionGet = new Subscription;
  subscriptionDelete = new Subscription;

  delete(pet: Pet) {
    if(confirm(`Tem certeza que deseja excluir permanentemente ${pet.name}?`)){
      this.subscriptionDelete = this.petService.delete(pet)
        .subscribe(data => {
          this.alertService.newAlert.emit([`${pet.name} excluído.`, 'success']);
          this.pets.splice(this.pets.indexOf(pet), 1);
        }, err => {
          this.alertService.newAlert.emit([`Erro ao excluir ${pet.name}.`, 'danger']);
        })
    }
  }

  constructor(
    private petService: PetService,
    private alertService: AlertService
  ) { }

  loadPets() {
    this.subscriptionGet = this.petService.getAll()
    .subscribe((data: Pet[]) => {
      this.pets = data;
    }, err => {
      this.alertService.newAlert.emit(['Erro ao carregar pets', 'danger']);
    });
  }

  ngOnInit() {
    this.loadPets();
  }

  ngOnDestroy() {
    this.subscriptionGet.unsubscribe();
    this.subscriptionDelete.unsubscribe();
  }

}
