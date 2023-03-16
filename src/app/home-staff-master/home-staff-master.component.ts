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
  page: number = 0;

  onclickAllStaffMaster = () => {
    this.page = 0;
    this.allStaff = allDummyEmployee;
  };
  onclickAllSalaryMaster = () => {
    this.page = 1;
    this.allStaff = allDummyEmployee;
  };

  ngOnInit(): void {}
}
