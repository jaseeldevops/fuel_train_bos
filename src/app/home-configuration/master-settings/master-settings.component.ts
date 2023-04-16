import { Component, Input, OnInit } from '@angular/core';
import { allBAnksDummy, allDenominationDummy } from './dummy_data';

@Component({
  selector: 'app-master-settings',
  templateUrl: './master-settings.component.html',
  styleUrls: [
    './master-settings.component.css',
    '../home-configuration.component.css',
  ],
})
export class MasterSettingsComponent implements OnInit {
  @Input() onChangePage: any;

  constructor() {}

  navCount = 5;

  allBanks: any = allBAnksDummy;
  allModeOfPayments: any = allBAnksDummy;
  allTaxs: any = allBAnksDummy;
  
  allDenomination: any = allDenominationDummy;

  ngOnInit(): void {}

  onClickEditBank = (item: any) => {};
  onClickEditModeofPayment = (item: any) => {};
}
