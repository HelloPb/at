import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtElementsModule } from './elements/modules';
import { AtComponentsModule } from './components/modules';

@NgModule({
  exports: [
    CommonModule,
    AtComponentsModule,
    AtElementsModule
  ]
})
export class SharedModule { }
