import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-operations-body',
  templateUrl: './home-operations-body.component.html',
  styleUrls: ['./home-operations-body.component.css'],
})
export class HomeOperationsBodyComponent implements OnInit {
  @Input() page: any;
  @Input() navCount: any;
  @Input() body: any;
  @Input() data: any;
  @Input() setPopup: any;

  constructor() {}

  ngOnInit(): void {}

  onClickEodShiftEndClose = (item: any) => {};
  onClickEodDayEndClose = (item: any) => {};
  onClickTtRecipientsInvoiceReload = (item: any) => {};
  onClickTtRecipientsDeliverySelect = (item: any) => {};
  onClickTtRecipientsDeliveryChecklestSelectAll = () => {};
  onClickTtRecipientsDeliveryChecklestCheck = (item: any) => {};
  onClickTtRecipientsDeliveryReload = (item: any) => {};
  onClickPaymentModeTesting = (item: any) => {};
  onClickankDensitySave = (item: any) => {};
  onClickcustomerConfigurationCustomerDelete = (item: any) => {};
  onClickcustomerConfigurationCustomerVehicleDelete = (item: any) => {};
  onClickSuplierConfigurationCustomerDelete = (item: any) => {};
}
