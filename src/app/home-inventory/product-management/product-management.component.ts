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

  allPromotions: any = allDummyPromotions;

  constructor() {}
  ngOnInit(): void {}

  onClickNewProduct = () => {
    this.onBack('addNewProduct');
  };

  onClickNewService = () => {
    this.onBack('addNewService');
  };

  onClickNewPromotions = () => {
    this.onBack('addNewPromotion');
  };

  onClickSaveOnNewProdect = () => {
    this.onBack('addProduct');
  };

  uploadedImages: any = [];
  uploadImageSelected = (e: any) => {
    console.log(URL.createObjectURL(e.target.files[0]));
    const joined: any = Array.from(this.uploadedImages).concat(
      Array.from(e.target.files)
    );
    this.uploadedImages = joined;
  };

  getImageLocalUrl = (img: any) => `url(${URL.createObjectURL(img)})`;
}
