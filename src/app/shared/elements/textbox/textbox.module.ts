import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './textbox.component';
import { ErrorModule } from '../../components/exports';
import { ReactiveFormsModule } from '@angular/forms';
import { InputStatusModule } from '../../directives/exports';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorModule,
    InputStatusModule
  ],
  declarations: [TextboxComponent],
  exports: [TextboxComponent]
})
export class TextboxModule { }
