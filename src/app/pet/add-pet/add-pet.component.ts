import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../alert/alert.service';
import { PetService } from '../pet.service';
import { Pet } from '../../models/pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  title: string;
  currentRoute: string;
  form: FormGroup;
  subscriptionRequest: Subscription;
  subscriptionGet: Subscription;
  subscriptionParams: Subscription;
  pet: Pet;

  onSubmit() {
    if(this.form.valid){
      if(this.currentRoute == 'add'){
        this.subscriptionRequest = this.petService.add(this.form.value)
          .subscribe(
            data => {
              this.router.navigate(['/']);
              this.alertService.newAlert.emit(['Pet adicionado!', 'success']);
            }, err => {
              this.alertService.newAlert.emit(['Erro ao adicionar pet!', 'danger']);
            }
          );
      }
      if(this.currentRoute == 'edit'){
        this.subscriptionRequest = this.petService.edit(this.form.value, this.pet.id)
          .subscribe(
            data => {
              this.router.navigate(['/']);
              this.alertService.newAlert.emit(['Pet modificado!', 'success']);
            }, err => {
              this.alertService.newAlert.emit(['Erro ao editar pet!', 'danger']);
            }
          );
      }
    } else {
      this.alertService.newAlert.emit(['Formulário inválido!', 'danger']);
    }
  }

  verifyRoute() {
    if(this.router.url == '/add'){
      this.currentRoute = 'add';
    } else if(this.router.url.substring(0, 5) == '/edit'){
      this.currentRoute = 'edit';
    }

    if(this.currentRoute == 'add'){
      this.title = 'Adicionar Pet';
    }

    if(this.currentRoute == 'edit'){
      this.title = 'Editar Pet';
      this.subscriptionParams = this.route.params
        .subscribe(params => {
          this.subscriptionGet = this.petService.get(params['id'])
            .subscribe((data: Pet) => {
              this.pet = data;
              this.form = this.formBuilder.group({
                name: [this.pet.name, [Validators.required, Validators.minLength(3)]],
                birth: [this.pet.birth, [Validators.required]],
                species: [this.pet.species, [Validators.required]],
                keeper: [this.pet.keeper, [Validators.required, Validators.minLength(3)]]
              });
            }, err => {
              this.alertService.newAlert.emit(['Erro ao carregar Pet', 'Danger']);
            })
        })
    }

  }

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      birth: [null, [Validators.required]],
      species: [null, [Validators.required]],
      keeper: [null, [Validators.required, Validators.minLength(3)]]
    });
    this.verifyRoute();
  }

  ngOnDestroy() {
    if(this.subscriptionRequest){
      this.subscriptionRequest.unsubscribe();
    }
    if(this.subscriptionParams){
      this.subscriptionParams.unsubscribe();
    }
    if(this.subscriptionGet){
      this.subscriptionGet.unsubscribe();
    }
  }

}
