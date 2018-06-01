import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PetService } from '../pet.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  form: FormGroup;
  subscription: Subscription;

  onSubmit() {
    this.subscription = this.petService.add(this.form.value)
      .subscribe(
        data => {
          this.router.navigate(['/']);
          this.alertService.newAlert.emit(['Pet adicionado!', 'success']);
        }, err => {
          this.alertService.newAlert.emit(['Erro ao adicionar pet!', 'danger']);
        }
      );
  }

  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      birth: [null, [Validators.required]],
      species: [null, [Validators.required]],
      keeper: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

}
