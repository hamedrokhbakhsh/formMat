import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
