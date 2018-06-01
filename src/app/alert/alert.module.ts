import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [AlertComponent],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule { }
