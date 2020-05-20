import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatSidenavModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from "@angular/material"

const MaterialComponent = [
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponent
  ],
  exports:[
    MaterialComponent
  ]
})
export class MaterialModule { }
