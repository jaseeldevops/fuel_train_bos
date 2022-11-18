import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-configuration',
  templateUrl: './home-configuration.component.html',
  styleUrls: ['./home-configuration.component.css'],
})
export class HomeConfigurationComponent implements OnInit {
  @Input() subTitles: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.subTitles);
  }
}
