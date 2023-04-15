import { Component, Input, OnInit } from '@angular/core';
import { allDummyProdects, allDummyStocks } from '../dummy_data';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: [
    './stock-management.component.css',
    '../home-inventory.component.css',
  ],
})
export class StockManagementComponent implements OnInit {
  @Input() page: any;
  @Input() onBack: any;

  subPage = 0;

  constructor() {}

  allProduct: any = allDummyProdects;
  allStocks: any = allDummyStocks;

  ngOnInit(): void {}

  onClickStockReturn = () => {
    this.onBack('newStockReturn');
  };
  onClickStockTaking = () => {
    this.onBack('inventoryCountPopup');
  };

  onClickSaveOnInventoryCountPopup = () => {
    this.onBack('stockTaking');
  };

  onClickNextOnStockTrailPopup = () => {
    this.onBack('stockTrail');
  };
}
