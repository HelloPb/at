import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtElementsModule } from './elements/modules';
import { AtComponentsModule } from './components/modules';
import { AtDirectivesModule } from './directives/modules';
@NgModule({
  exports: [
    CommonModule,
    AtComponentsModule,
    AtElementsModule,
    AtDirectivesModule
  ]
})
export class SharedModule { }
