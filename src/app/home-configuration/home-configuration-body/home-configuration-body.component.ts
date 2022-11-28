import { Component, Input, OnInit } from '@angular/core';
import { islandSettingsDummy } from '../dummy_data';

@Component({
  selector: 'app-home-configuration-body',
  templateUrl: './home-configuration-body.component.html',
  styleUrls: ['./home-configuration-body.component.css'],
})
export class HomeConfigurationBodyComponent implements OnInit {
  @Input() page: any;
  @Input() navCount: any;
  @Input() body: any;

  constructor() {}

  islandSettings: any = {};

  ngOnInit(): void {
    this.islandSettings = islandSettingsDummy;
  }
}
