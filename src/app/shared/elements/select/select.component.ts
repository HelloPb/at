import { Component, OnInit, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'at-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public collapsed = true;

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
