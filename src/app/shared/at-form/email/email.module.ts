import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailComponent],
  exports: [EmailComponent]
})
export class EmailModule { }
