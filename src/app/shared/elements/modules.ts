import { NgModule } from '@angular/core';
import { EmailModule } from './email/email.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { NumberModule } from './number/number.module';
import { PasswordModule } from './password/password.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { TextboxModule } from './textbox/textbox.module';

@NgModule({
  exports: [
    CheckboxModule,
    EmailModule,
    NumberModule,
    PasswordModule,
    RadioModule,
    SelectModule,
    TextboxModule
  ],
})
export class AtElementsModule { }
