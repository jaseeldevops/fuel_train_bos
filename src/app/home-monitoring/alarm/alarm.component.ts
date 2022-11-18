import { Component, OnInit } from '@angular/core';
import { allAlarmsDummy } from 'src/app/home-dashboard/dummy_data';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
})
export class AlarmComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  allAlarms = allAlarmsDummy;

  allAlrarmTable = [
    {
      no: '01',
      type: 'Irregular Totaliser Reading ',
      total: '8',
      open: '16',
      highPriority: '58',
      lowPriority: '21',
    },
    {
      no: '02',
      type: 'Totaliser Mismatch',
      total: '8',
      open: '36',
      highPriority: '8',
      lowPriority: '18',
    },
    {
      no: '03',
      type: 'Preset Validation',
      total: '8',
      open: '26',
      highPriority: '8',
      lowPriority: '8',
    },
    {
      no: '04',
      type: 'ATG Probe Communication Failure',
      total: '8',
      open: '6',
      highPriority: '8',
      lowPriority: '8',
    },
    {
      no: '05',
      type: 'Low Level',
      total: '18',
      open: '6',
      highPriority: '18',
      lowPriority: '28',
    },
  ];
}
