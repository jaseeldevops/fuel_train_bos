import { Component, OnInit } from '@angular/core';
import { allDummyCashAndBank, allDummyCheckList } from './dummy_data';

@Component({
  selector: 'app-home-cash-and-bank',
  templateUrl: './home-cash-and-bank.component.html',
  styleUrls: ['./home-cash-and-bank.component.css'],
})
export class HomeCashAndBankComponent implements OnInit {
  constructor() {}

  allBanks: any = allDummyCashAndBank;
  addAccount: any = null;
  addFundTransfer: any = null;
  chequeList: any = null;
  chequeListPage: any = 0;
  selectedCheque: any = null;

  ngOnInit(): void {}

  onclickAllcheck = () => {
    this.chequeListPage = 0;
    this.chequeList = {};
    this.chequeList = allDummyCheckList;
  };
  onclickOutward = () => {
    this.chequeListPage = 1;
    this.chequeList = allDummyCheckList;
  };
  onclickInward = () => {
    this.chequeListPage = 2;
    this.chequeList = allDummyCheckList;
  };
  onClickCheque = (id: any) => {
    this.selectedCheque = {};
  };
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
  onClickSaveNewAccount = () => {
    this.selectedCheque = {};
  };
  onClickSaveFundTransfer = () => {
    this.selectedCheque = {};
  };
  onClickSaveCheque = () => {
    this.selectedCheque = {};
  };
}
