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
  subscriptionGetPage = new Subscription;
  subscriptionGetAll = new Subscription;
  subscriptionDelete = new Subscription;
  totalOfItens: number;

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

  changePage(event: any) {
    this.loadPets(event.pageIndex + 1);
  }

  loadPets(page) {
    this.subscriptionGetPage = this.petService.getPage(page)
    .subscribe((data: Pet[]) => {
      this.pets = data;
    }, err => {
      this.alertService.newAlert.emit(['Erro ao carregar pets', 'danger']);
    });
  }

  getTotalOfItens() {
    this.subscriptionGetAll = this.petService.getAll()
    .subscribe((data: Pet[]) => {
      this.totalOfItens = data.length;
    }, err => {
      this.alertService.newAlert.emit(['Erro ao carregar pets', 'danger']);
    });
  }

  ngOnInit() {
    this.getTotalOfItens();
    this.loadPets(1);
  }

  ngOnDestroy() {
    this.subscriptionGetPage.unsubscribe();
    this.subscriptionGetAll.unsubscribe();
    this.subscriptionDelete.unsubscribe();
  }

}
