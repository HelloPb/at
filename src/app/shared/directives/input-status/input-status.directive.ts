import { CommonModule } from '@angular/common';
import { Directive, NgModule, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { addRemoveClasses } from '../../utils/util';
import { CommonProperties } from '../../classes/common-properties';

@Directive({
  selector: '[atInputStatus]'
})
export class InputStatusDirective extends CommonProperties implements OnInit, OnDestroy {

  constructor(private ele: ElementRef, private input: NgControl) {
    super();
  }

  private applySwatches(status): void {
    switch (status) {
      case 'INVALID': addRemoveClasses(this.ele.nativeElement, ['atc-border-error'], []);
        break;
      case 'VALID': addRemoveClasses(this.ele.nativeElement, [], ['atc-border-error']);
        break;
    }
  }

  public ngOnInit(): void {
    this.rxs(this.input.statusChanges.subscribe(status => this.applySwatches(status)));
  }

  public ngOnDestroy(): void {
    this.unsubscribe();
  }

}

@NgModule({
  declarations: [
    CommonModule,
    InputStatusDirective
  ],
  exports: [
    InputStatusDirective
  ]
})
export class InputStatusModule { }
