import { Component, OnInit } from '@angular/core';
import { allDummyCalenderCells } from './dummy_data';

@Component({
  selector: 'app-home-calender',
  templateUrl: './home-calender.component.html',
  styleUrls: ['./home-calender.component.css'],
})
export class HomeCalenderComponent implements OnInit {
  constructor() {}

  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  allDays: any = allDummyCalenderCells;

  salectedDay: any = null;

  onClickNextMonth = () => {};
  onClickPrevMonth = () => {};

  ngOnInit(): void {}
}
