import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'at-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() key;

  constructor() { }

  ngOnInit() {
  }

}
