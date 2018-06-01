import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatToolbarModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
