import { Component, OnInit } from '@angular/core';
import { allDummyEmployee, allDummyPayrunEmployee } from './dummy_data';

@Component({
  selector: 'app-home-staff-master',
  templateUrl: './home-staff-master.component.html',
  styleUrls: ['./home-staff-master.component.css'],
})
export class HomeStaffMasterComponent implements OnInit {
  constructor() {}

  allStaff: any = allDummyEmployee;
  allSalartMaster: any = allDummyEmployee;
  allPayrun: any = allDummyEmployee;
  allPayrunEmploye: any = allDummyPayrunEmployee;

  page: string = 'staffMaster';
  popupSelected: string = '';
  isSystemUser: boolean = false;

  isEdit: boolean = false;

  onclickAllStaffMaster = () => {
    this.page = 'staffMaster';
    this.allStaff = allDummyEmployee;
  };

  onclickAllSalaryMaster = () => {
    this.page = 'salaryMaster';
    this.allSalartMaster = allDummyEmployee;
  };

  onclickAllPayrun = () => {
    this.page = 'payRun';
    this.allPayrun = allDummyEmployee;
  };

  onClickAddEmloyee = () => {
    this.isEdit = false;
    this.popupSelected = 'employeeForm';
  };

  onClickAddPayRun = () => {
    this.page = 'addPayRun';
  };

  onClickSaveEmployeeForm = () => {
    this.popupSelected = '';
  };

  uploadedImage: any;
  uploadImageSelected = (e: any) => {
    if (e.target.files.length > 0) this.uploadedImage = e.target.files[0];
  };

  getImageLocalUrl = () => {
    if (this.uploadedImage)
      return `url(${URL.createObjectURL(this.uploadedImage)})`;
    else return '';
  };

  ngOnInit(): void {}

  onSelectAnyStaf = (it: any) => {
    this.isEdit = true;
    this.popupSelected = 'employeeForm';
  };

  addPayrunForm = {
    items: [{}],
  };

  onChangeItemInPayloadForm = (e: any) => {
    this.addPayrunForm.items.push({});
  };

  onClickPayLoadDltItem = (k: any) => {
    if (this.addPayrunForm.items?.length > 1)
      this.addPayrunForm.items.splice(k, 1);
  };

  onClickSaveAdvancePayroll = () => {};
}
