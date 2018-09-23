import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent, EffectsDirective } from './textbox.component';
import { ErrorModule } from '../../components/error/error.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorModule
  ],
  declarations: [TextboxComponent, EffectsDirective],
  exports: [TextboxComponent]
})
export class TextboxModule { }
