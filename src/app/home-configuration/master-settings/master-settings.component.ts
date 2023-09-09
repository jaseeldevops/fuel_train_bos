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

  navCount = 0;
  popUp: any = '';
  isEdit = false;

  allBanks: any = allBAnksDummy;
  allModeOfPayments: any = allBAnksDummy;
  allTaxs: any = allBAnksDummy;

  allDenomination: any = allDenominationDummy;

  ngOnInit(): void {}

  // ///////////////////////////////////////////////////////
  onClickAddBank = () => {
    this.isEdit = false;
    this.popUp = 'addBank';
  };
  onClickEditBank = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addBank';
  };
  onClickDeleteBank = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddMOP = () => {
    this.isEdit = false;
    this.popUp = 'addMOP';
  };
  onClickEditMOP = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addMOP';
  };
  onClickDeleteMOP = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddTax = () => {
    this.isEdit = false;
    this.popUp = 'addTax';
  };
  onClickEditTax = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addTax';
  };
  onClickDeleteTax = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddParentCategory = () => {
    this.isEdit = false;
    this.popUp = 'addParentCategory';
  };
  onClickEditParentCategory = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addParentCategory';
  };
  onClickDeleteParentCategory = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddProductCategory = () => {
    this.isEdit = false;
    this.popUp = 'addProductCategory';
  };
  onClickEditProductCategory = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addProductCategory';
  };
  onClickDeleteProductCategory = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddExpenseCategory = () => {
    this.isEdit = false;
    this.popUp = 'addExpenseCategory';
  };
  onClickEditExpenseCategory = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addExpenseCategory';
  };
  onClickDeleteExpenseCategory = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddAllowancesIncentives = () => {
    this.isEdit = false;
    this.popUp = 'addAllowancesIncentives';
  };
  onClickEditAllowancesIncentives = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addAllowancesIncentives';
  };
  onClickDeleteAllowancesIncentives = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddBranch = () => {
    this.isEdit = false;
    this.popUp = 'addBranch';
  };
  onClickEditBranch = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addBranch';
  };
  onClickDeleteBranch = (item: any) => {};
  // ///////////////////////////////////////////////////////
  onClickAddVehicleType = () => {
    this.isEdit = false;
    this.popUp = 'addVehicleType';
  };
  onClickEditVehicleType = (item: any) => {
    this.isEdit = true;
    this.popUp = 'addVehicleType';
  };
  onClickDeleteVehicleType = (item: any) => {};

  // //////////////////////
  // //////////////////////
  // //////////////////////
  // //////////////////////
  onChangeProdectColor = (selectedColor: any) => {};
  // //////////////////////
  // //////////////////////
  // //////////////////////
  // //////////////////////
  onClickUploadInput = () => {
    const upInput = document.getElementById('picUpldInput');
    upInput?.click();
  };
}
