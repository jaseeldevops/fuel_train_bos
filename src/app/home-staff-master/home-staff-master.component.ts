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
  page: number = 0;

  onclickAllStaffMaster = () => {
    this.page = 0;
    this.allStaff = allDummyEmployee;
  };
  onclickAllSalaryMaster = () => {
    this.page = 1;
    this.allSalartMaster = allDummyEmployee;
  };
  onclickAllPayrun = () => {
    this.page = 2;
    this.allPayrun = allDummyEmployee;
  };

  ngOnInit(): void {}
}
