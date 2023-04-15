import { Component, OnInit } from '@angular/core';
import {
  allDummyProdects,
  allDummyPromotions,
  allDummyStocks,
} from './dummy_data';

@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css'],
})
export class HomeInventoryComponent implements OnInit {
  constructor() {}

  // page: any = null;
  // page: any = 'addNewProduct';
  page: any = 'newStockReturn';

  onBack = (p: string) => (this.page = p);

  allProduct: any = {};
  allPromotions: any = {};
  allStocks: any = {};

  ngOnInit(): void {}

  onClickAddProduct = () => {
    this.page = 'addProduct';
    this.allProduct = allDummyProdects;
  };
  onClickAddService = () => {
    this.page = 'addService';
    this.allProduct = allDummyProdects;
  };
  onClickPromotions = () => {
    this.page = 'promotions';
    this.allPromotions = allDummyPromotions;
  };
  onClickPriceLookup = () => {
    this.page = 'priceLookup';
    this.allProduct = allDummyProdects;
  };
  onClickPriceChange = () => {
    this.page = 'priceChange';
    this.allProduct = allDummyProdects;
  };
  onClickStockRecived = () => {
    this.page = 'stockRecived';
    this.allStocks = allDummyStocks;
  };
  onClickStockTransfer = () => {
    this.page = 'stockTransfer';
    this.allStocks = allDummyStocks;
  };
  onClickStockReturn = () => {
    this.page = 'stockReturn';
    this.allStocks = allDummyStocks;
  };
  onClickStockTaking = () => {
    this.page = 'stockTaking';
    this.allProduct = allDummyProdects;
  };
  onClickStockTrail = () => {
    this.page = 'stockTrail';
    this.allProduct = allDummyProdects;
  };
  onClickStockAdjestment = () => {
    this.page = 'stockAdjestment';
    this.allProduct = allDummyProdects;
  };
  onClickStockLookup = () => {
    this.page = 'stockLookup';
    this.allProduct = allDummyProdects;
  };
  onClickMslLookup = () => {
    this.page = 'mslLookup';
    this.allProduct = allDummyProdects;
  };
}
