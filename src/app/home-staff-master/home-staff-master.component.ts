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

  ngOnInit(): void {}
}
