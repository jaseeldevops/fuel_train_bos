import { Component, Input, OnInit } from '@angular/core';
import {
  allLocalAccountDummy,
  transationDummy,
  vechileDetailsDummy,
} from './dummy_data';

@Component({
  selector: 'app-local-account',
  templateUrl: './local-account.component.html',
  styleUrls: [
    './local-account.component.css',
    '../home-operations.component.css',
  ],
})
export class LocalAccountComponent implements OnInit {
  @Input() onChangePage: any;
  constructor() {}

  popUp = '';
  page = 'localAccount'; // selectedAccount
  tab = 0;

  allLocalAccount: any = allLocalAccountDummy;
  allTransation: any = transationDummy;
  allVechileDetails: any = vechileDetailsDummy;

  selectedAccount: any = {};

  onClickAnyAccount = (it: any) => {
    this.page = 'selectedAccount';
    this.selectedAccount = it;
  };

  onChangeStatus = (e: any, k: any) => {
    this.allVechileDetails.content[k].status = e.target.value;
  };

  ngOnInit(): void {}
}
