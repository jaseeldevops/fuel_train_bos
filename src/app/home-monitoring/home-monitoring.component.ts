import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-monitoring',
  templateUrl: './home-monitoring.component.html',
  styleUrls: ['./home-monitoring.component.css'],
})
export class HomeMonitoringComponent implements OnInit {
  constructor() {}

  isLoading = false;

  ngOnInit(): void {}

  page = 'pump';
}
