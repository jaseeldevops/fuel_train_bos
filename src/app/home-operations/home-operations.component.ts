import { Component, Input, OnInit } from '@angular/core';
import { allMaintenanceDummy } from '../home-configuration/dummy_data';
import { drowerIconList } from '../home/store';
import {
  allControlsDummy,
  allCustomerConfigurationDummy,
  allEodDummy,
  allMonolithConfigurationDummy,
  allPaymentModeDummy,
  allPriceChangeDummy,
  allTankDensityDummy,
  allTtRecipientsDummy,
} from './dummy_data';

@Component({
  selector: 'app-home-operations',
  templateUrl: './home-operations.component.html',
  styleUrls: ['./home-operations.component.css'],
})
export class HomeOperationsComponent implements OnInit {
  @Input() page: any;
  constructor() {}

  subTitles: any =
    drowerIconList.find((it: any) => it.path === 'operations')?.subTitles ?? [];

  ngOnInit(): void {
    this.setPage();
  }

  navCount = 0;
  data: any = null;
  isLoading = false;

  popup: any = null;
  closePopUp: any = () => (this.popup = null);
  setPopup: any = (it: any) => (this.popup = it);

  // This function will open the page based on the URL
  setPage = () => {
    const path = window.location.pathname.split('/');
    if (path !== null)
      if (path.length > 3) {
        this.page = path[3];
        this.getData(path[3]);
      }
    this.navCount = 0;
  };

  setPageIn = (it: any) => {
    this.page = it.path;
    this.navCount = 0;
    this.getData(it.path);
  };

  getData = (s: any) => {
    this.isLoading = true;
    // API calls are called from here based on which button thay are clicked
    switch (s) {
      case 'eod':
        this.data = allEodDummy;
        break;
      case 'ttRecipients':
        this.data = allTtRecipientsDummy;
        break;
      case 'paymentMode':
        this.data = allPaymentModeDummy;
        break;
      case 'controls':
        this.data = allControlsDummy;
        break;
      case 'priceChange':
        this.data = allPriceChangeDummy;
        break;
      case 'tankDensity':
        this.data = allTankDensityDummy;
        break;
      case 'monolithConfiguration':
        this.data = allMonolithConfigurationDummy;
        break;
      case 'customerConfiguration':
        this.data = allCustomerConfigurationDummy;
        break;
      default:
        break;
    }
    this.isLoading = false;
  };
}
