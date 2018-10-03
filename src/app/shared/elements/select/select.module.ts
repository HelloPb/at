import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ErrorModule } from '../../components/exports';
import { ReactiveFormsModule } from '@angular/forms';
import { InputStatusModule } from '../../directives/input-status/input-status.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorModule,
    InputStatusModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule { }
