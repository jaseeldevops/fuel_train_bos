import { Component, OnInit } from '@angular/core';
import { allDummyCashAndBank, allDummyCheckList } from './dummy_data';

@Component({
  selector: 'app-home-cash-and-bank',
  templateUrl: './home-cash-and-bank.component.html',
  styleUrls: ['./home-cash-and-bank.component.css'],
})
export class HomeCashAndBankComponent implements OnInit {
  constructor() {}

  page = 'cashAndBank'; // chequeList, bankHistory
  popup = ''; // addAccount, addFundTransfer, selectedCheque
  isEdit = false;

  allBanks: any = allDummyCashAndBank;
  addAccount: any = {};
  addFundTransfer: any = {};
  chequeList: any = {};
  chequeListPage: any = 0;
  selectedCheque: any = null;

  selectedBank: any = null;

  onClickAnyBank = (it: any) => {
    this.page = 'bankHistory';
    this.selectedBank = it;
  };

  ngOnInit(): void {}

  onClickAddFundTransfer = () => {
    this.popup = 'addFundTransfer';
  };
  onClickAddAccount = () => {
    this.isEdit = false;
    this.popup = 'addAccount';
  };
  onClickEditAccount = (item: any) => {
    this.isEdit = true;
    this.popup = 'addAccount';
  };
  onClickDeleteAccount = (item: any) => {
    alert('Account Deleted');
  };

  onclickAllcheck = () => {
    this.page = 'chequeList';
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
