import { Component, Input, OnInit } from '@angular/core';

const months = [
  { name: 'January', last: 31 },
  { name: 'February', last: 28 },
  { name: 'March', last: 31 },
  { name: 'April', last: 30 },
  { name: 'May', last: 31 },
  { name: 'June', last: 30 },
  { name: 'July', last: 31 },
  { name: 'August', last: 31 },
  { name: 'September', last: 30 },
  { name: 'October', last: 31 },
  { name: 'November', last: 30 },
  { name: 'December', last: 31 },
];

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  @Input() onChange?: any;

  isOpened = false;

  fromCalender: any = [];
  toCalender: any = [];
  fromDate: any = {};
  toDate: any = {};

  setFromCalender = (d: any, first?: any) => {
    this.fromCalender = [];
    if (first)
      this.fromDate = {
        weekCount: d.getDay(),
        monthWord: months[d.getMonth()].name,
        lastDay: months[d.getMonth()].last,
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        hh: d.getHours(),
        mm: d.getMinutes(),
        ss: d.getSeconds(),
      };
    if (this.fromDate.year % 4 === 0 && this.fromDate.month === 2)
      ++this.fromDate.lastDay;
    for (let i = 0; i < 43; i++) {
      if (i <= this.fromDate.lastDay + this.fromDate.weekCount) {
        this.fromCalender.push({
          view: i > this.fromDate.weekCount,
          value: i - this.fromDate.weekCount,
          selected: this.checkTwoDateStatas(this.fromDate, {
            ...this.fromDate,
            day: i - this.fromDate.weekCount,
          }),
          day: { ...this.fromDate, day: i - this.fromDate.weekCount },
        });
      }
    }
  };

  setToCalender = (d: any, first?: any) => {
    this.toCalender = [];
    if (first)
      this.toDate = {
        weekCount: d.getDay(),
        monthWord: months[d.getMonth()].name,
        lastDay: months[d.getMonth()].last,
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        hh: d.getHours(),
        mm: d.getMinutes(),
        ss: d.getSeconds(),
      };
    if (this.toDate.year % 4 === 0 && this.toDate.month === 2)
      ++this.toDate.lastDay;
    for (let i = 0; i < 43; i++) {
      if (i <= this.toDate.lastDay + this.toDate.weekCount) {
        this.toCalender.push({
          view: i > this.toDate.weekCount,
          value: i - this.toDate.weekCount,
          selected: this.checkTwoDateStatas(this.toDate, {
            ...this.toDate,
            day: i - this.toDate.weekCount,
          }),
          day: { ...this.toDate, day: i - this.toDate.weekCount },
        });
      }
    }
  };

  checkTwoDateStatas = (d1: any, d2: any) => {
    if (d1.day === d2.day)
      if (d1.month === d2.month) if (d1.year === d2.year) return true;
    return false;
  };

  onClickDayFrom = (item: any) => {
    this.fromDate = item.day;
    this.setFromCalender('');
  };

  onClickDayTo = (item: any) => {
    this.toDate = item.day;
    this.setToCalender('');
  };

  previousMonthFrom = () => {
    let date = '';
    if (this.fromDate.month === 1)
      date = `${this.fromDate.year - 1}-12-01T12:00:00Z`;
    else {
      if (this.fromDate.month > 10)
        date = `${this.fromDate.year}-${this.fromDate.month - 1}-01T12:00:00Z`;
      else
        date = `${this.fromDate.year}-0${this.fromDate.month - 1}-01T12:00:00Z`;
    }
    this.setFromCalender(new Date(date), true);
  };

  nextMonthFrom = () => {
    let date = '';
    if (this.fromDate.month === 12)
      date = `${this.fromDate.year + 1}-01-01T12:00:00Z`;
    else {
      if (this.fromDate.month >= 9)
        date = `${this.fromDate.year}-${this.fromDate.month + 1}-01T12:00:00Z`;
      else
        date = `${this.fromDate.year}-0${this.fromDate.month + 1}-01T12:00:00Z`;
    }
    this.setFromCalender(new Date(date), true);
  };

  previousMonthTo = () => {
    let date = '';
    if (this.toDate.month === 1)
      date = `${this.toDate.year - 1}-12-01T12:00:00Z`;
    else {
      if (this.toDate.month > 10)
        date = `${this.toDate.year}-${this.toDate.month - 1}-01T12:00:00Z`;
      else date = `${this.toDate.year}-0${this.toDate.month - 1}-01T12:00:00Z`;
    }
    this.setToCalender(new Date(date), true);
  };

  nextMonthTo = () => {
    let date = '';
    if (this.toDate.month === 12)
      date = `${this.toDate.year + 1}-01-01T12:00:00Z`;
    else {
      if (this.toDate.month >= 9)
        date = `${this.toDate.year}-${this.toDate.month + 1}-01T12:00:00Z`;
      else date = `${this.toDate.year}-0${this.toDate.month + 1}-01T12:00:00Z`;
    }
    this.setToCalender(new Date(date), true);
  };

  ngOnInit(): void {
    this.setToCalender(new Date(), true);
    this.setFromCalender(new Date(), true);
  }

  close = () => {
    this.setToCalender(new Date(), true);
    this.setFromCalender(new Date(), true);
    this.isOpened = false;
  };

  submit = () => {
    const f = this.fromDate;
    const t = this.toDate;

    const makeTwo = (i: any) => (i < 10 ? '0' + i : i);

    this.onChange(
      `${makeTwo(f.year)}-${makeTwo(f.month)}-${makeTwo(f.day)}T${makeTwo(
        f.hh
      )}:${makeTwo(f.mm)}:${makeTwo(f.ss)}Z`,
      `${makeTwo(t.year)}-${makeTwo(t.month)}-${makeTwo(t.day)}T${makeTwo(
        f.hh
      )}:${makeTwo(t.mm)}:${makeTwo(t.ss)}Z`
    );
    this.isOpened = false;
  };
}
