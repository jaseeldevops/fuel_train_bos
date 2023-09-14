import { Component, Input, OnInit } from '@angular/core';
import { allDiscountConfigurationDummy } from './dummy_data';

@Component({
  selector: 'app-discount-configurations',
  templateUrl: './discount-configurations.component.html',
  styleUrls: [
    './discount-configurations.component.css',
    '../home-operations.component.css',
  ],
})
export class DiscountConfigurationsComponent implements OnInit {
  @Input() onChangePage: any;
  constructor() {}

  popUp = '';

  allDiscountConfiguration: any = allDiscountConfigurationDummy;

  onClickNewButton = (v: any) => {
    if (v === 'New Discount') {
      this.popUp = 'addDiscount';
    }
    if (v === 'Forcount') {
    }
    if (v === 'C-Store') {
    }
    if (v === 'Unifiled') {
    }
  };

  ngOnInit(): void {}
}
