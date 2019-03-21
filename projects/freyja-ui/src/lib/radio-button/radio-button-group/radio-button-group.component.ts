import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fj-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent implements OnInit {

  /**
   * Radiogroup Options
   */
  @Input() options: any;
  /**
   * Radiogroup group label
   */
  @Input() label: any;

  constructor() { }

  ngOnInit() {
  }

}