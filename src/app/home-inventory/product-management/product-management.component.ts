import { Component, Input, OnInit } from '@angular/core';
import { allDummyProdects, allDummyPromotions } from '../dummy_data';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: [
    './product-management.component.css',
    '../home-inventory.component.css',
  ],
})
export class ProductManagementComponent implements OnInit {
  @Input() page: any;
  @Input() onBack: any;

  allProduct: any = allDummyProdects;

  allPromotions = allDummyPromotions;

  constructor() {}

  onClickNewProduct = () => {
    this.onBack('addNewProduct');
  };

  onClickNewService = () => {
    this.onBack('addNewService');
  };

  onClickNewPromotions = () => {
    this.onBack('addNewPromotion');
  };

  ngOnInit(): void {}
}
