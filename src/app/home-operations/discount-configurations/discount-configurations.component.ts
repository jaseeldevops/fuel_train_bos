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

  ngOnInit(): void {}
}
