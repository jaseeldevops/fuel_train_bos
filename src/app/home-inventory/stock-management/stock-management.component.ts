import { Component, Input, OnInit } from '@angular/core';
import {
  allDummyProdects,
  allDummyStocks,
  allDummyStocksTakingReviewList,
  selectedDummyStockTrail,
} from '../dummy_data';

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

  selectedPopUp = '';

  stockTakingSubPage = 0;
  stockTakingEachSubPage = 0;
  stockReviewSubPage = 0;

  onClickStockTakingSubPage = (k: number) => {
    this.stockTakingSubPage = k;
  };
  onClickStockTakingEachSubPage = (k: number) => {
    this.stockTakingEachSubPage = k;
  };
  onClickStockReviewSubPage = (k: number) => {
    this.stockReviewSubPage = k;
  };

  constructor() {}

  allProduct: any = allDummyProdects;
  allStocks: any = allDummyStocks;

  allStocksTakingReviewList: any = allDummyStocksTakingReviewList;

  selectedStockTrail: any = {};

  ngOnInit(): void {}

  onClickStockReturn = () => {
    this.onBack('newStockReturn');
  };
  onClickStockTaking = () => {
    this.selectedPopUp = 'inventoryCountPopup';
  };

  onClickSaveOnInventoryCountPopup = () => {
    this.onBack('stockTaking');
  };

  onClickNextOnStockTrailPopup = () => {
    this.selectedStockTrail = selectedDummyStockTrail;
    this.onBack('stockTrail');
  };

  selctedStockTakingBanch: any = {};
  onClickStockTakingEach = (it: any) => {
    this.selctedStockTakingBanch = it;
    this.onBack('stockTakingEach');
  };
  onClickStartCount = () => {
    this.selctedStockTakingBanch.status = 'started';
  };

  selctedStockTakingReview: any = {};
  onClickReviewInStockTaking = (it: any) => {
    if (it?.status !== 'Review') return;
    this.selctedStockTakingReview = it;
    this.onBack('stockTakingReview');
  };

  onDropSrockTakingReviewBtn = (value: any) => {
    if (value === 'MARK COMPLATE') {}
    if (value === 'Reject Stocktake') {
      this.selectedPopUp = 'rejectStovkTakePopup';
    }
    if (value === 'Reopen Stocktake') {
      this.selectedPopUp = 'reopenStovkTakePopup';
    }
  };
}
