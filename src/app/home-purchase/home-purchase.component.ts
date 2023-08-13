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
}
