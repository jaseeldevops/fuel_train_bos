import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-calender',
  templateUrl: './home-calender.component.html',
  styleUrls: ['./home-calender.component.css'],
})
export class HomeCalenderComponent implements OnInit {
  constructor() {}

  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  ngOnInit(): void {}
}
