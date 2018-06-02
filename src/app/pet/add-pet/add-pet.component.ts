import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AlertService } from '../../alert/alert.service';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  title: string;
  currentRoute: string;
  form: FormGroup;
  subscription: Subscription;

  onSubmit() {
    if(this.form.valid){
      this.subscription = this.petService.add(this.form.value)
        .subscribe(
          data => {
            this.router.navigate(['/']);
            this.alertService.newAlert.emit(['Pet adicionado!', 'success']);
          }, err => {
            this.alertService.newAlert.emit(['Erro ao adicionar pet!', 'danger']);
          }
        );
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
    }

  }

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verifyRoute();
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      birth: [null, [Validators.required]],
      species: [null, [Validators.required]],
      keeper: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

}
