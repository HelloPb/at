import { NgModule } from '@angular/core';
import { EmailModule } from './email/email.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { NumberModule } from './number/number.module';
import { PasswordModule } from './password/password.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { TextModule } from './text/text.module';

@NgModule({
  exports: [
    CheckboxModule,
    EmailModule,
    NumberModule,
    PasswordModule,
    RadioModule,
    SelectModule,
    TextModule
  ],
})
export class AtElementsModule { }
