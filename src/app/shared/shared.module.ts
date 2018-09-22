import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtElementsModule } from './elements/modules';

@NgModule({
  exports: [
    CommonModule,
    AtElementsModule
  ]
})
export class SharedModule { }
