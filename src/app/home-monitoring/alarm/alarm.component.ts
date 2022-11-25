import { Component, OnInit } from '@angular/core';
import {
  allAlarmsDummy,
  allAlarmTableDemmy,
  allEquipmentDummy,
  allPriorityDummy,
} from '../dummy_data';
import { alertDetailsDummy } from '../dummy_data';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css'],
})
export class AlarmComponent implements OnInit {
  constructor() {}

  allAlarms: any = {};
  allPriority: any = [];
  allEquipment: any = [];
  allAlrarmTable: any = [];
  
  ngOnInit(): void {
    this.allAlarms = allAlarmsDummy;
    this.allPriority = allPriorityDummy;
    this.allEquipment = allEquipmentDummy;
    this.allAlrarmTable = allAlarmTableDemmy;
    // run this function after assigning the values to priority
    this.setPriorityGraph();
    // run this function after assigning the values to equipment
    this.setEquipmentGraph();
  }

  priorityGraphData: any = [];
  setPriorityGraph = () => {
    for (let i = 0; i < this.allPriority.length; i++)
      for (let j = 0; j < this.allPriority[i].value * 3.6; j++)
        this.priorityGraphData.push(this.allPriority[i].color);
  };

  equipmentGraphData: any = [];
  setEquipmentGraph = () => {
    for (let i = 0; i < this.allEquipment.length; i++)
      for (let j = 0; j < this.allEquipment[i].value * 3.6; j++)
        this.equipmentGraphData.push(this.allEquipment[i].color);
  };

  // keepThis value ;
  priorityTotal = 0;

  // When the this var is null it will hide the details popup
  alertsDetailsTable: any = null;

  onClickViewAlarm = (id: any) => {
    alert(id);
    this.alertsDetailsTable = alertDetailsDummy;
  };

  onChangeDetailTableCount = (e: any) => {
    alert(e.target.value);
  };
}
