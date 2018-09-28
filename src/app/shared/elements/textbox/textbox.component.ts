import { Component, OnInit, ViewEncapsulation, ElementRef, Directive, HostListener, Input } from '@angular/core';
import { addRemoveClasses } from '../../utils/util';

@Component({
  selector: 'at-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextboxComponent implements OnInit {

  @Input() key = '';

  constructor() { }

  public ngOnInit(): void {
  }

}
