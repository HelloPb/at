import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent, TextboxDirective } from './textbox.component';
import { ErrorModule } from '../../components/error/error.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorModule
  ],
  declarations: [TextboxComponent, TextboxDirective],
  exports: [TextboxComponent]
})
export class TextboxModule { }
