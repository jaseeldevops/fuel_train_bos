import { Component, Input, OnInit } from '@angular/core';
import { allPosIpDummy } from './dummy_data';

@Component({
  selector: 'app-other-settings',
  templateUrl: './other-settings.component.html',
  styleUrls: [
    './other-settings.component.css',
    '../home-configuration.component.css',
  ],
})
export class OtherSettingsComponent implements OnInit {
  @Input() onChangePage: any;

  navCount: any = 0;

  allPosIp = allPosIpDummy;

  constructor() {}

  ngOnInit(): void {}
}
