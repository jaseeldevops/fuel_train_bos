import { Component, Input, OnInit } from '@angular/core';
import { allDummyProdects } from '../dummy_data';

@Component({
  selector: 'app-price-management',
  templateUrl: './price-management.component.html',
  styleUrls: [
    './price-management.component.css',
    '../home-inventory.component.css',
  ],
})
export class PriceManagementComponent implements OnInit {
  @Input() page: any;
  @Input() onBack: any;

  constructor() {}

  allProduct: any = allDummyProdects;

  ngOnInit(): void {}
}
