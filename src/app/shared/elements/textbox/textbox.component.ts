import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'at-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxComponent implements OnInit {

  @Input() placeholder = '';
  @Input() label = undefined;
  @Input() key = undefined;
  @Input() value = '';
  @Input() maxlength;

  constructor(public ngControl: NgControl) {
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

  private propagateChange = (_: any) => { };

  public writeValue(value: any): void {
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public ngOnInit(): void {

  }
}
