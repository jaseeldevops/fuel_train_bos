import { Component, Input, OnInit } from '@angular/core';
import { allDummyProdects, allDummyStocks } from '../dummy_data';

@Component({
  selector: 'app-branch-management',
  templateUrl: './branch-management.component.html',
  styleUrls: [
    './branch-management.component.css',
    '../home-inventory.component.css',
  ],
})
export class BranchManagementComponent implements OnInit {
  @Input() page: any;
  @Input() onBack: any;

  constructor() {}

  isEdit: boolean = false;

  allProduct: any = allDummyProdects;
  allStocks: any = allDummyStocks;

  onClickNewStockRecived = () => {
    this.onBack('addStockReceived');
  };

  onClicksNewStockTransfer = () => {
    this.isEdit = false;
    this.onBack('addStockTransfer');
  };

  ngOnInit(): void {}

  stockReceivedForm = {
    items: [{}],
  };

  onChangeReceivedFormItem = (e: any) => {
    this.stockReceivedForm.items.push({});
  };

  onClickReceivedFormDltItem = (k: any) => {
    if (this.stockReceivedForm.items?.length > 1)
      this.stockReceivedForm.items.splice(k, 1);
  };

  onClickStockReceived = (it: any) => {
    this.isEdit = true;
    this.onBack('addStockReceived');
  };
  // //////////////////////////////////////////
  // //////////////////////////////////////////
  // //////////////////////////////////////////
  // //////////////////////////////////////////
  stockTransferForm = {
    items: [{}],
  };

  onChangeTransferFormItem = (e: any) => {
    this.stockTransferForm.items.push({});
  };

  onClickTransferFormDltItem = (k: any) => {
    if (this.stockTransferForm.items?.length > 1)
      this.stockTransferForm.items.splice(k, 1);
  };

  onClickStockTransfer = (it: any) => {
    this.isEdit = true;
    this.onBack('addStockTransfer');
  };
}
