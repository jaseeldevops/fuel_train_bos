import { Component, OnInit } from '@angular/core';
import { dummyGoodsRecivedNotes, dummyPurchaseOrder } from './dummy';

@Component({
  selector: 'app-home-purchase',
  templateUrl: './home-purchase.component.html',
  styleUrls: ['./home-purchase.component.css'],
})
export class HomePurchaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  allPurchaseOrder: any = dummyPurchaseOrder;
  allGoodsNotes: any = dummyGoodsRecivedNotes;

  page: any = 0;
  addPurchase: any = null;
  addPurchaseOrder: any = null;

  popup: any = null;
  closePopUp: any = () => (this.popup = null);
  setPopup: any = (it: any) => (this.popup = it);

  onClickNewPurchase = () => {
    if (this.page === 0) this.addPurchaseOrder = {};
    else this.addPurchase = {};
  };

  addPurchaseOrderForm: any = {
    items: [{}],
  };

  onChangePurchaseOrderItem = (e: any) => {
    this.addPurchaseOrderForm.items.push({});
  };

  onClickPurchaseOrderDltItem = (k: any) => {
    if (this.addPurchaseOrderForm.items?.length > 1)
      this.addPurchaseOrderForm.items.splice(k, 1);
  };

  onClickSavePurchaseOrder = (type: any) => {
    if (type === 'SAVE & PRINT') {
    } else if (type === 'Save & Add') {
    } else if (type === 'Save') {
    }
  };

  // //////////////////////////////////////////////
  // //////////////////////////////////////////////
  // //////////////////////////////////////////////

  addPurchaseForm: any = {
    items: [{}],
  };

  onChangePurchaseItem = (e: any) => {
    this.addPurchaseForm.items.push({});
  };

  onClickPurchaseDltItem = (k: any) => {
    if (this.addPurchaseForm.items?.length > 1)
      this.addPurchaseForm.items.splice(k, 1);
  };

  onClickSavePurchase = (type: any) => {
    if (type === 'SAVE & PRINT') {
    } else if (type === 'Save & Add New') {
    } else if (type === 'Save & Payment') {
      this.addPurchaseForm.saved = true;
    }
  };
}
