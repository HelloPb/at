import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtElementsModule } from './elements/modules';
import { AtComponentsModule } from './components/modules';
import { AtDirectivesModule } from './directives/modules';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AtComponentsModule,
    AtElementsModule,
    AtDirectivesModule
  ]
})
export class SharedModule { }
