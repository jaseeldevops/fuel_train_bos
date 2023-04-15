import { Component, Input, OnInit } from '@angular/core';
import { allDummyProdects, allDummyStocks } from '../dummy_data';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css',
  '../home-inventory.component.css',]
})
export class StockManagementComponent implements OnInit {
  @Input() page: any;
  @Input() onBack: any;

  constructor() { }

  allProduct: any = allDummyProdects;
  allStocks: any = allDummyStocks;

  ngOnInit(): void {
  }

}
