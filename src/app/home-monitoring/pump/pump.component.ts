import { Component, OnInit } from '@angular/core';
import { allNozzleStatusDummy, allPumpStatusDummy } from '../dummy_data';

@Component({
  selector: 'app-pump',
  templateUrl: './pump.component.html',
  styleUrls: ['./pump.component.css'],
})
export class PumpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  allPumpStatus = allPumpStatusDummy;
  allNozzleStatus = allNozzleStatusDummy;

  pumpStatusMenuSelected: any = null;
}
