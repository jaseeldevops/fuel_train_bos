import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css'],
})
export class HomeInventoryComponent implements OnInit {
  constructor() {}

  // page: any = null;
  page: any = 'stockTakingEach';

  onBack = (p: string) => (this.page = p);

  allProduct: any = {};
  allPromotions: any = {};
  allStocks: any = {};

  ngOnInit(): void {}

  onClickAddProduct = () => {
    this.page = 'addProduct';
  };
  onClickAddService = () => {
    this.page = 'addService';
  };
  onClickPromotions = () => {
    this.page = 'promotions';
  };
  onClickPriceLookup = () => {
    this.page = 'priceLookup';
  };
  onClickPriceChange = () => {
    this.page = 'priceChange';
  };
  onClickStockRecived = () => {
    this.page = 'stockRecived';
  };
  onClickStockTransfer = () => {
    this.page = 'stockTransfer';
  };
  onClickStockReturn = () => {
    this.page = 'stockReturn';
  };
  onClickStockTaking = () => {
    this.page = 'stockTaking';
  };
  onClickStockTrail = () => {
    this.page = 'stockTrailPopup';
  };
  onClickStockAdjestment = () => {
    this.page = 'stockAdjestment';
  };
  onClickStockLookup = () => {
    this.page = 'stockLookup';
  };
  onClickMslLookup = () => {
    this.page = 'mslLookup';
  };
}
