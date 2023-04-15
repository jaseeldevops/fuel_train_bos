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

  allProduct: any = allDummyProdects;
  allStocks: any = allDummyStocks;

  onClickNewStockRecived = () => {
    this.onBack('addStockRecived');
  };

  onClicksNewStockTransfer = () => {
    this.onBack('addStockTransfer');
  };

  ngOnInit(): void {}
}
