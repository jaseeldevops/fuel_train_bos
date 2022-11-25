import { Component, OnInit } from '@angular/core';
import { allTankDummy } from '../dummy_data';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css'],
})
export class TankComponent implements OnInit {
  constructor() {}

  allTank: any = [];

  ngOnInit(): void {
    this.allTank = allTankDummy;
  }
}
