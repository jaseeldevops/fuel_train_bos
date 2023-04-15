import { Component, OnInit } from '@angular/core';
import { allDummyEmployee } from './dummy_data';

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
  page: string = 'employeeForm';

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
    this.page = 'employeeForm';
  };

  onClickSaveEmployeeForm = () => {};

  ngOnInit(): void {}
}
