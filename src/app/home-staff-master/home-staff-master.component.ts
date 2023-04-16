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
  popUp: String = '';
  isSystemUser: boolean = false;

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
    this.popUp = 'employeeForm';
  };

  onClickAddPayRun = () => {
    this.page = 'addPayRun';
  };

  onClickSaveEmployeeForm = () => {
    this.popUp = '';
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
}
