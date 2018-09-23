import { Component, OnInit, ViewEncapsulation, ElementRef, Directive, HostListener } from '@angular/core';

@Component({
  selector: 'at-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}

@Directive({
  selector: '[atEffects]'
})
export class EffectsDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('focus', ['$event.target'])
  onFocus(ele: any) {
    ele.classList.add('atc-border-focus');
    ele.classList.remove('atc-border');
  }
  @HostListener('focusout', ['$event.target'])
  onFocusout(ele: any) {
    ele.classList.remove('atc-border-focus');
    ele.classList.add('atc-border');
  }
}
