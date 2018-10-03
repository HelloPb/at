import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'at-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alltray';
  /**
   *
   */

  fg;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({ gg: '' });
  }
}
