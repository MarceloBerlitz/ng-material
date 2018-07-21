import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatToolbarModule, MatExpansionModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
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
    MatExpansionModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
