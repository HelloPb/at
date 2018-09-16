import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtFormModule } from './at-form/modules';

@NgModule({
  exports: [
    CommonModule,
    AtFormModule
  ]
})
export class SharedModule { }
