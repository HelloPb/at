import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PasswordComponent],
  exports: [PasswordComponent]
})
export class PasswordModule { }
