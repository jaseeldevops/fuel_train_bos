import { Component, Input, OnInit } from '@angular/core';
import { allDiscountConfigurationDummy } from './dummy_data';

@Component({
  selector: 'app-discount-configurations',
  templateUrl: './discount-configurations.component.html',
  styleUrls: [
    './discount-configurations.component.css',
    '../home-operations.component.css',
  ],
})
export class DiscountConfigurationsComponent implements OnInit {
  @Input() onChangePage: any;
  constructor() {}

  popUp = '';

  allDiscountConfiguration: any = allDiscountConfigurationDummy;

  onClickNewButton = (v: any) => {
    if (v === 'New Discount') {
      this.popUp = 'addForCount';
    }
    if (v === 'Forcount') {
      this.popUp = 'addForCount';
    }
    if (v === 'C-Store') {
      this.popUp = 'addCStore';
    }
    if (v === 'Unifiled') {
      this.popUp = 'addUnfiled';
    }
  };

  newDiscountForm: any = {
    list: [{}],
  };
  onClickAddOrDltItem = (count: any) => {
    if (count < this.newDiscountForm.list.length - 1) {
      this.newDiscountForm.list.splice(count, 1);
    } else {
      this.newDiscountForm.list.push({});
    }
  };

  ngOnInit(): void {}
}
