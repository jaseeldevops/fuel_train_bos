import { Component, OnInit } from '@angular/core';
import { alldeviceStatusesDummy } from '../dummy_data';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  constructor() {}

  data: any = {};

  ngOnInit(): void {
    this.data = alldeviceStatusesDummy;
  }

  setStatusColor = (s: any) => {
    if (s === 'IDLE') return '#FFB400';
    if (s === 'FUELING') return '#00C220';
    if (s === 'ONLINE') return '#00C220';
    if (s === 'OFFLINE') return '#E00505';
    return '#838383';
  };
}
